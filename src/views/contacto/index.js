import React from 'react';
import Axios from 'axios';
import './styles.scss';

class Contacto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            lugar: '',
            tipo: '',
            consulta: ''
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
        
        var url = 'https://ws.diagnosticoadvance.com.ar/sender/contacto';
        //url = 'http://localhost:8110/sender/contacto';
        
        var data = new FormData();
        data.append('nombre',this.state.nombre);
        data.append('apellido',this.state.apellido);
        data.append('lugar',this.state.lugar);
        data.append('tipo',this.state.tipo);
        data.append('email',this.state.email);
        data.append('telefono',this.state.telefono);        
        data.append('consulta',this.state.consulta);
        
        Axios.post(url,data).then(function(response){
            alert("Mensaje enviado con éxito.");
            this.setState({
                nombre: '',
                apellido: '',
                lugar: '',
                tipo: '',
                consulta: '',
                email: '',
                telefono: '',
            });
        }.bind(this));
    }

    render(){
        return(
            <section id='contacto'>
                <h1>CONTACTO</h1>
                <div className='wrapper-central'>

                <p className='subtitulo'>Si la respuesta a tu consulta no figura entre las Preguntas Frecuentes
                de cada Estudio Médico, completá el formulario y un representante de Advance te responderá a la brevedad.
                </p>

                <div className='est'><a className='btn' href='https://portal.diagnosticoadvance.com.ar' target='_blank'> Ver Estudios Médicos</a>
                </div>

                <div className='imagen'>
                    <img src='/images/otras/frente.jpg' alt='frente' />
                </div>

                <div className='cajas'>
                    <div className='izq'>
                        <h3>Contactanos</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label for='nombre'>NOMBRE:</label><input name='nombre' type='text' value={this.state.nombre} onChange={this.handleInputChange}/>
                            <label for='apellido'>APELLIDO:</label><input name='apellido' type='text' value={this.state.apellido} onChange={this.handleInputChange}/>
                            <label for='lugar'>LUGAR DE RESIDENCIA:</label><input name='lugar' type='text' value={this.state.lugar} onChange={this.handleInputChange}/>
                            <label for='email'>EMAIL:</label><input name='email' type='text' value={this.state.email} onChange={this.handleInputChange}/>
                            <label for='telefono'>TELÉFONO:</label><input name='telefono' type='text' value={this.state.telefono} onChange={this.handleInputChange}/>
                            <label for='tipo'>TIPO DE CONSULTA:</label>
                                <select name='tipo' type='text' value={this.state.tipo} onChange={this.handleInputChange}>
                                    <option value='estudios-medicos'>Estudios Médicos</option>
                                    <option value='area-medica'>Área Médica</option>
                                    <option value='administrativa'>Administrativa</option>
                                    <option value='rrhh'>RRHH</option>
                                </select>
                            <label for='consulta'>CONSULTA:</label>
                            <textarea name='consulta' rows='10' value={this.state.consulta} onChange={this.handleInputChange}></textarea>
                            <button className='btn'>Enviar</button>
                        </form>

                </div>
                <div className='der'>

                <h3>Horarios de atención</h3>
                <div className='horarios'>
                            <div className='linea'></div>
                            <span>
                                Lunes a viernes - 07.00 a 23.00<br/>
                                Sábado - 09.00 a 13.00<br/>
                                Domingo - Cerrado<br/>
                            </span>
                            <div className='linea'></div>
                </div>
                <div className='info'>
                        <div className='ubicacion'>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Alem 1360, Viedma, Río Negro</span>
                        </div>
                        <div className='email'>
                            <i className="fas fa-envelope"></i>
                            <span><a href='mailto:info@diagnosticoadvance.com​'>info@diagnosticoadvance.com.ar</a></span>
                        </div>
                        <div className='telefono'>
                            <i className="fas fa-phone"></i>
                            <span><a href='tel:+54 02920 429957'>+54 02920 429957</a></span>
                        </div>
                    </div>

                </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.2060205075977!2d-62.98765804860231!3d-40.82343821981182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95f6984163f20bfd%3A0xad8863410e623f44!2sAlem+1360%2C+Viedma%2C+R%C3%ADo+Negro!5e0!3m2!1ses-419!2sar!4v1563498177703!5m2!1ses-419!2sar" width="100%" height="500" frameborder="0" allowfullscreen></iframe>
                </div>
            </section>
        )
    }
}

export default Contacto;