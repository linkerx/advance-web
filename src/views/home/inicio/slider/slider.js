import React from 'react';
import renderHTML from 'react-render-html';
import { Parallax } from 'react-parallax';


class WpSlider extends React.Component {

    constructor(props) {
    super(props);

    var options = {};
    if(props.options)
      options = props.options;

    this.state = {
      options: this.prepareOptions(options),
      items: null,
      current: null,
      timer: null,
    }
    this.updateItems = this.updateItems.bind(this);
    this.show = this.show.bind(this);
    this.start = this.start.bind(this);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.backPage = this.backPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
    this.validPage = this.validPage.bind(this);
    this.isActive = this.isActive.bind(this);
    this.getPageItems = this.getPageItems.bind(this);
  }

  prepareOptions(userOptions){

    var options = {
      autoListCount: true,
      listCount: 3,
      listImgSize: 'thumbnail',
      pageCount: 1,
      pageImgSize: 'large',
      time: 5000,
    }

    if(userOptions.autoListCount) {options.autoListCount = userOptions.autoListCount;}
    if(userOptions.listCount) {options.listCount = userOptions.listCount;}
    if(userOptions.listImgSize) {options.listImgSize = userOptions.listImgSize;}
    if(userOptions.pageCount) {options.pageCount = userOptions.pageCount;}
    if(userOptions.pageImgSize) {options.pageImgSize = userOptions.pageImgSize;}
    if(userOptions.time) {options.time = userOptions.time;}

    return options;
  }

  componentDidMount(){
      this.updateItems();
  }

  updateItems(){

    var items = [
      {
        id: 1,
        img: "/images/slider/mamografia.jpg",
        texto: "<h3>Servicio de mamografía</h3><div class='linea'></div>Realizá tus estudios de rutina con un equipamiento único en la región. Más comodidad, mejores resultados.",
        link: "/estudios/mamografia",
        textoLink: "Ver más"
      },
      {
        id: 2,
        img: "/images/comp/3186.jpg",
        texto: "<h3>Servicios de vanguardia</h3><div class='linea'></div>Reservá tu lugar para estudios de Resonancia, Tomografía y Ecografía.",
        link: "/pacientes",
        textoLink: "Solicitar turno"
      },
      {
        id: 3,
        img: "/images/comp/3214.jpg",
        texto: "<h3>Tu salud en buenas manos</h3><div class='linea'></div>Trabajamos con la mejor tecnología y un equipo médico especializado en diagnóstico por imágenes para brindarte la atención que buscás.",
        link: "/institucional",
        textoLink: "Conocenos"
      },
      /*
      {
        id: 2,
        img: "/images/slider/telefono.jpg",
        texto: "<h3>Turnos online</h3><div class='linea'></div>Reservá ahora un turno por 24 horas y recibí la atención personalizada que esperás.",
        link: "/estudios",
        textoLink: "Reservar turno"
      },
      */
      {
        id: 4,
        img: "/images/slider/online.jpg",
        texto: "<h3>Mirá tus estudios desde donde estés</h3><div class='linea'></div>Accedé a tus resultados de manera exclusiva y confidencial.",
        link: "//portal.diagnosticoadvance.com.ar",
        textoLink: "Ver mis estudios online"
      },
    ]

    this.setState({
        options: this.state.options,
        items: items,
        current: null,
        timer: setTimeout(function(){this.start()}.bind(this),0)
     });
  }

  validPage(page){
    var valid = false;
    if (page > 0) {
      if (((page-1) * this.state.options.pageCount) < this.state.options.listCount)
        valid = true;
    }
    return valid;
  }

  getPageItems(page){
    if(this.validPage(page)){
      var first = (page-1) * this.state.options.pageCount;
      var last = first + this.state.options.pageCount;
      return this.state.items.slice(first,last);
    }
    return [];
  }

  isActive(id) {
    if(this.state.current){
      return this.state.current.items.find(function(item) {
          return item.id === id;
      })
    }
    return false;
  }

  show(page){
    console.log("mostrando slide",page);
    this.setState(function() {
      return {
        options: this.state.options,
        items: this.state.items,
        current: {
          items: this.getPageItems(page),
          page: page,
          timer: setTimeout(function(){this.next()}.bind(this),10000)
        }
      }
    }.bind(this));
  }

  start(){
    this.show(1);
  }

  change(page){
    clearTimeout(this.state.timer);
    this.show(page);
  }

  next(){
    var page = this.nextPage();
    this.show(page);
  }

  back(){
    var page = this.backPage();
    this.show(page);
  }


  lastPage(){
    var response = Math.floor(this.state.options.listCount / this.state.options.pageCount);
    if(((this.state.options.listCount / this.state.options.pageCount) - response) === 0) {
      return response;
    } else {
      return response + 1;
    }
  }

  nextPage(){
    if(this.state.current.page === this.lastPage()) {
      return 1;
    } else {
      return this.state.current.page + 1;
    }
  }

  backPage(){
    if(this.state.current.page === 1) {
      return this.lastPage();
    } else {
      return this.state.current.page - 1;
    }
  }

  render() {
    return (
      <div className="slider">
        {this.props.list &&
          <div className='list'>
          {!this.state.items
            ?
            this.props.children
            :
            this.state.items.map(function (item, index) {
              if(this.isActive(item.id)){
                return (<div>active</div>)
              }
              return (<div>hola</div>)
            }.bind(this))
          }
          </div>
        }

        <div className='page'>
          {!this.state.current
            ?
            this.props.children
            :
            this.state.current.items.map(function (item, index) {
             
              return (
                <div className='slider-container'>
                  
                  <Parallax bgImage={item.img} strength={500}>
                  </Parallax>

                  <div className='texto'>
                    <span>{renderHTML(item.texto)}</span><br/>
                    <a className="btn" href={item.link}>{item.textoLink}</a>
                  </div>
                </div>
              )
            }.bind(this))
          }
        </div>
        <div className='navigation'>
          <ul className='pages'>
          {
            Array.apply(null,{length: this.lastPage()}).map(Number.call,Number).map(function(item, index){
              var activeClass = 'inactive';
              if(this.state.current && this.state.current.page === item+1){
                activeClass = 'active';
              }

              return (<li key={index} className={["page-"+(item+1),activeClass].join(' ')} onClick={() => this.change(item+1)} >{/*item+1*/}</li>)
            }.bind(this))
          }
          </ul>
        </div>
        <div className='arrowLeft' onClick={this.back}><i class="fas fa-chevron-left"></i></div>
        <div className='arrowRight' onClick={this.next}><i class="fas fa-chevron-right"></i></div>
      </div>
    )
  }
}

export default WpSlider;
