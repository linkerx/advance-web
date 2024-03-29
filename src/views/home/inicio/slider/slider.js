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
      items: this.loadItems(),
      current: null,
      timer: null,
    }

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
      listCount: 5,
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
      this.start();
  }

  loadItems(){
    var items = [
/*      {
        id: 0,
        img: "/images/slider/cancer-de-mama-2022.jpg",
        texto: "<h3>Mes de concientización sobre el cáncer de mama</h3><div class='linea'></div>Tu salud está en tus manos, controlate.",
        link: "/pacientes",
        textoLink: "Solicitar turno",
        clase: "rosa"
      },*/
      {
        id: 1,
        img: "/images/slider/nuevo-espacio.jpg",
        texto: "<h3>Nueva sede en el centro de Viedma</h3><div class='linea'></div>Un Servicio de Resonancia Cardiovascular sin precedentes en la región.",
        link: "/contacto",
        textoLink: "Ver más",
        clase: "normal"
      },
      {
        id: 2,
        img: "/images/slider/ecodoppler.jpg",
        texto: "<h3>Ecografía</h3><div class='linea'></div>Nuevos estudios Ecodoppler clave para la prevención y detección temprana de distintas enfermedades cardíacas.",
        link: "/estudios/ecografia",
        textoLink: "Ver más",
        clase: "otro"
        },
      /*{
        id: 2,
        img: "/images/slider/mamografia.jpg",
        texto: "<img src='/images/lazo-rosa-cancer.png' style='position:absolute;top:-100px;height: 90px;left: -10px;' /><h3>Octubre Rosa</h3><div class='linea'></div>Mes de concientización sobre el Cáncer de Mama. Recordá siempre tu control anual.",
        link: "/estudios/mamografia",
        textoLink: "Ver más",
        clase: "rosa"
      },*/
      
     {
      id: 3,
      img: "/images/slider/mamografia.jpg",
      texto: "<h3>Mamografía 3D, un servicio único en Viedma</h3><div class='linea'></div>Última tecnología en la detección del cáncer de mama.",
      link: "/estudios/mamografia",
      textoLink: "Ver más",
      clase: "normal"
      },
      {
        id: 4,
        img: "/images/comp/3186.jpg",
        texto: "<h3>Servicios de vanguardia</h3><div class='linea'></div>Reservá tu lugar para estudios de Resonancia, Tomografía y Ecografía.",
        link: "/pacientes",
        textoLink: "Solicitar turno",
        clase: "normal"
      },
      {
        id: 5,
        img: "/images/comp/3214.jpg",
        texto: "<h3>Tu salud en buenas manos</h3><div class='linea'></div>Trabajamos con la mejor tecnología y un equipo médico especializado en diagnóstico por imágenes para brindarte la atención que buscás.",
        link: "/institucional",
        textoLink: "Conocenos",
        clase: "normal"
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
        id: 6,
        img: "/images/slider/online.jpg",
        texto: "<h3>Mirá tus estudios desde donde estés</h3><div class='linea'></div>Accedé a tus resultados de manera exclusiva y confidencial.",
        link: "//portal.diagnosticoadvance.com.ar",
        textoLink: "Ver mis estudios online",
        clase: "normal"
      },
    ]
    return items;
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
    console.log("mostrando slide",page, this.state.timer);
    clearTimeout(this.state.timer);
    this.setState(function() {
      return {
        options: this.state.options,
        items: this.state.items,
        current: {
          items: this.getPageItems(page),
          page: page
        },
        timer: setTimeout(function(){this.next()}.bind(this),8000)
      }
    }.bind(this));
  }

  start(){
    this.show(1);
  }

  change(page){
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
             
              const clsl = 'slider-container '+ item.clase;

              return (
                <div className={clsl}>
                  
                  <Parallax bgImage={item.img}>
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
        <div className='arrowLeft' onClick={this.back}><i className="fas fa-chevron-left"></i></div>
        <div className='arrowRight' onClick={this.next}><i className="fas fa-chevron-right"></i></div>
      </div>
    )
  }
}

export default WpSlider;
