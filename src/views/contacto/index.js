import React from 'react';
import './styles.scss';

class Contacto extends React.Component {
    render(){
        return(
            <section id='contacto'>
                <h1>CONTACTO</h1>
                <div className='wrapper-central'>

                <p className='subtitulo'>Si la respuesta a tu consulta no figura entre las Preguntas Frecuentes
                de cada Estudio Médico, completá el formulario y un representante de Advance te responderá a la brevedad.
                </p>

                <div className='est'><a className='btn' href='//portal.diagnosticadvance.com.ar' target='_blank'> Ver Estudios Médicos</a>
                </div>

                <div className='imagen'>
                    <img src='/images/otras/frente.jpg' alt='frente' />
                </div>

                <div className='cajas'>
                    <div className='izq'>
                        <h3>Contactanos</h3>
                        <label for='nombre'>NOMBRE:</label><input name='nombre' type='text' value=''/>
                        <label for='apellido'>APELLIDO:</label><input name='apellido' type='text' value=''/>
                        <label for='lugar'>LUGAR DE RESIDENCIA:</label><input name='lugar' type='text' value=''/>
                        <label for='tipo'>TIPO DE CONSULTA:</label>
                            <select name='tipo' type='text' value=''>
                                <option value=''>Estudios Médicos</option>
                                <option value=''>Área Médica</option>
                                <option value=''>Administrativa</option>
                                <option value=''>RRHH</option>
                            </select>
                        <label for='consulta'>CONSULTA:</label>
                        <textarea name='consulta' rows='10'></textarea>
                        <button className='btn'>ENVIAR</button>
                </div>
                <div className='der'>

                <h3>Horarios de atención</h3>
                <p>
                Lunes a viernes 8.00 a 20.00
                Sábado Cerrado
                Domingo Cerrado
                </p>

                ícono 02920 429957
                ícono info@diagnosticoadvance.com
                ícono Alem 1360, Viedma, Río Negro, Argentina

                </div>
                </div>

                </div>
            </section>
        )
    }
}

export default Contacto;