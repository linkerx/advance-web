import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Pacientes extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            estudiosVideo: false
        }

        this.verVideo = this.verVideo.bind(this);
        this.ocultarVideo = this.ocultarVideo.bind(this);        
    }

    verVideo(){
        this.setState({
            estudiosVideo: true
        });
    }
    
    ocultarVideo(){
        this.setState({
            estudiosVideo: false
        });
    }
    
    render(){
        var classPlano='btn plano';
        return(
            <section id='pacientes'>
                <h1>PACIENTES</h1>
                <div className='wrapper-central'>
                    <div className='turnos'>
                    <h2>Gestión de turnos</h2>
                    <p>
                        <strong>Para solicitar turnos, contactarse de lunes a viernes de 06.00 a 23.00 y/o sábados de 06.00 a 13.00. </strong>
                    </p>

                    <div className='info'>
                        <div className='ubicacion'>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Alem 1360, Viedma, Río Negro</span>
                        </div>
                        <div className='email'>
                            <i className="fas fa-envelope"></i>
                            <span><a href='mailto:info@diagnosticoadvance.com​.ar'>info@diagnosticoadvance.com.ar</a></span>
                        </div>
                        <div className='telefono'>
                            <i className="fas fa-phone"></i>
                            <span><a href='tel:+54 02920 429957'>+54 02920 429957</a></span>
                        </div>
                    </div>
                    </div>
                    <div id='abono'><i className="fas fa-credit-card"></i>Los estudios se pueden abonar con trajeta de débito o crédito hasta 12 cuotas.</div>
                    <ul className='tarjetas'>
                        <li><i className="fab fa-cc-visa"></i></li>
                        <li><i className="fab fa-cc-mastercard"></i></li>
                    </ul>
                    <div id='lugar'><i className="fas fa-user-clock"></i>El día de la realización de cualquier estudio, deberás presentarte 15 minutos antes del turno en la recepción de Advance. 
                    El lugar es guardado para vos, rogamos puntualidad. Si no podés acudir en el día y horarios convenidos, por favor avisar con anticipación.</div>
                </div>

                <div className='fixedimg'>
                    <ul>
                        <li>
                            <h2>Requisitos para tu atención</h2>
                            Para concretar tu turno y atención médica, es necesario que presentes:
                            <ul>
                                <li><strong>DNI, cédula de identidad o carnet de conducir </strong></li>
                                <li><strong>Orden médica</strong></li>
                                <li><strong>Estudios previos</strong></li>
                            </ul>
                        </li>
                        <li>
                            <h2>Seguridad del paciente</h2>
                            <p>
                            Para estudios de alta complejidad, si estás o creés estar embarazada, o si poseés
                            prótesis, operaciones cardíacas u otros elementos extraños en tu
                            organismo, por favor informalo al momento de solicitar turno.
                            </p>
                            <p>
                            En caso de poseer marcapasos, las resonancias magnéticas están contraindicadas 
                            por lo que para esos estudios no se podrán otorgar turnos.
                            </p>
                            </li>
                            <li>
                            <h2>Pacientes de otras ciudades</h2>
                            <p>
                            Si vivís en el interior de Río Negro o en otra provincia, queremos brindarte la
                            posibilidad de gestionar turnos y coordinar estudios para realizarlos en una sola
                            visita.
                            También podés solicitar información sobre alojamiento y datos de interés de la
                            ciudad de Viedma.
                            </p>
                            <a className={classPlano} href=''><i className="fas fa-file-pdf"></i> Plano de Viedma</a>
                        </li>
                    </ul>
                </div>

                <div className='wrapper-central'>
                    <div className='caja'>
                        {!this.state.estudiosVideo ?
                            <div className='wrp'>
                                <div className='izq'>
                                    <img src='/images/slider/online.jpg' />                      
                                </div>
                                <div className='der'>
                                <h2>Resultados online</h2>
                                    <p>
                                    <strong>Accedé a tus estudios desde donde estés, de manera rápida, exclusiva y
                                    segura.</strong></p>
                                    <p>
                                    En Advance tenés la posibilidad de ver los resultados de tus estudios sin moverte de
                                    tu casa, ingresando a la plataforma VER MIS ESTUDIOS.</p>
                                    <p>
                                    Para acceder por primera vez, deberás generar un usuario y contraseña. Luego, con
                                    esos datos, podés iniciar sesión para consultar los informes e imágenes todas las
                                    veces que quieras.</p>
                                    <p>
                                    También podés compartilos online, guardarlos e imprimirlos desde tu computadora o
                                    cualquier dispositivo móvil, estés donde estés.
                                    </p>
                                    <a href='http://portal.diagnosticoadvance.com.ar/portal/WebLogin.aspx?ReturnUrl=/portal/default.aspx' target='_blank' className='btn'>VER MIS ESTUDIOS</a>
                                    <a href='javascript:void(0)' onClick={this.verVideo} className='btn'>TUTORIAL</a>
                                </div>
                            </div>
                        :
                            <div className='tutorial'>
                                <iframe src="https://www.youtube-nocookie.com/embed/osAl97ZemGQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <a href='javascript:void(0)' onClick={this.ocultarVideo} ><i className='fa fa-times'></i></a>
                            </div>
                        }
                    </div>

                    <div className='preguntas'>
                    <h2>Preguntas Frecuentes</h2>
                        <p>
                        En Advance queremos despejar tus dudas y brindarte la información que necesitás
                        para llegar a realizarte el estudio con seguridad, confianza y tranquilidad. 
                        Accedé a las preguntas frecuentes de cada estudio y, si aún tenés dudas, ponete en contacto con nosotros.

                        ¡Estamos para atenderte!
                        
                        </p>
                        
                        <ul className='estudios'>
                            <li className='tomo'><Link to='/estudios/tomografia'>Tomografía Computada</Link></li>
                            <li className='reso'><Link to='/estudios/resonancia'>Resonancia Magnética</Link></li>
                            <li className='eco'><Link to='/estudios/ecografia'>Ecografía</Link></li>
                        </ul>
                        
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Pacientes;