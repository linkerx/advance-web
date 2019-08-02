import React from 'react';
import Axios from 'axios';
import './styles.scss';

class AreaMedica extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            profesion: '',
            institucion: '',
            temas: '',
            email: '',
            telefono: '',
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        var url = 'https://ws.diagnosticoadvance.com.ar/sender/area-medica';
        //url = 'http://localhost:8110/sender/contacto';
        
        var data = new FormData();
        data.append('nombre',this.state.nombre);
        data.append('profesion',this.state.profesion);
        data.append('institucion',this.state.institucion);
        data.append('temas',this.state.temas);
        data.append('email',this.state.email);
        data.append('telefono',this.state.telefono);
        
        Axios.post(url,data).then(function(response){
            alert("Mensaje enviado con éxito.");
            this.setState({
                nombre: '',
                profesion: '',
                institucion: '',
                temas: '',
                email: '',
                telefono: '',
            });
        }.bind(this));
    }

    render(){
        return(
            <section id='area-medica'>
                <h1>ÁREA MEDICA</h1>
                <div className='wrapper-central'>

                    <div className='resultados'>
                        <h2>Resultados online</h2>
                            <p className='accede'>
                            <strong>Accedé a los estudios que indicaste a tus pacientes de manera rápida, exclusiva y segura.</strong></p>
                            
                            <a href='http://portal.diagnosticoadvance.com.ar' target='_blank' className='btn'>VER ESTUDIOS</a>
                    </div>
                    
                    <div className='imagen'>
                        <img src='/images/slider/equipo.jpg' alt='frente' />
                    </div>

                    <div className='prof'>
                    <h2>Actividades de formación profesional</h2>
                    <h3>Somos parte de la misma solución</h3>

                    <p className='subtitulo'>
                    Creemos que la capacitación continua y el diálogo permanente con la
                    comunidad médica es clave para brindar respuestas integrales a
                    nuestros pacientes y contribuir al desarrollo del área de la salud en
                    nuestra región.
                    Por eso creamos un espacio dedicado a la formación, al debate de
                    casos y el intercambio de experiencias.
                    </p>

                    </div>
                    
                    <div className='caja'>
                    <p>
                    Estamos construyendo nuestra agenda de capacitaciones y ateneos. Para conocer
                    próximos eventos, hacer sugerencias o recibir novedades, escribinos a
                    info​@diagnosticoadvance.com​ o dejanos tus datos.
                    </p>

                    <form onSubmit={this.handleSubmit}>
                        <label for='nombre'>NOMBRE:</label><input name='nombre' type='text' value={this.state.nombre} onChange={this.handleInputChange}/>
                        <label for='profesion'>PROFESIÓN/ESPECIALIDAD:</label><input name='profesion' type='text' value={this.state.profesion} onChange={this.handleInputChange} />
                        <label for='institucion'>INSTITUCIÓN:</label><input name='institucion' type='text' value={this.state.institucion} onChange={this.handleInputChange} />
                        <label for='temas'>TEMÁTICAS DE INTERÉS:</label><input name='temas' type='text' value={this.state.temas} onChange={this.handleInputChange} />
                        <label for='email'>EMAIL:</label><input name='email' type='text' value={this.state.email} onChange={this.handleInputChange} />
                        <label for='telefono'>TELÉFONO:</label><input name='telefono' type='text' value={this.state.telefono} onChange={this.handleInputChange}/>
                        <div className='clearfix'></div>
                        <button className='btn'>Enviar</button>
                    </form>
                    <div className='clearfix'></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AreaMedica;