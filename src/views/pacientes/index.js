import React from 'react';
import './styles.scss';

class Pacientes extends React.Component {
    render(){
        return(
            <section id='pacientes'>
                <h1>GUÍA PARA PACIENTES</h1>
                <div className='wrapper-central'>
                    <h2>Gestión de turnos</h2>
                    <p>
                        Para solicitar turnos, contactarse de lunes a viernes de 08.00 a 20.00 horas
                    </p>

                    <div className='info'>
                        <div className='ubicacion'>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Alem 1360, Viedma, Río Negro</span>
                        </div>
                        <div className='email'>
                            <i className="fas fa-envelope"></i>
                            <span><a href='mailto:info@diagnosticoadvance.com​'>info@diagnosticoadvance.com</a></span>
                        </div>
                        <div className='telefono'>
                            <i className="fas fa-phone"></i>
                            <span><a href='tel:+54 02920 429957'>+54 02920 429957</a></span>
                        </div>
                    </div>

                    <p>
                    El lugar es guardado para vos, rogamos puntualidad. Si no podés acudir en el día y
                    horarios convenidos, por favor avisar con anticipación.</p>

                    <h2>Pacientes de otras ciudades</h2>
                    <p>
                    Si vivís en el interior de Río Negro o en otra provincia, queremos brindarte la
                    posibilidad de gestionar turnos y coordinar estudios para realizarlos en una sola
                    visita.
                    También podés solicitar información sobre alojamiento y datos de interés de la
                    ciudad de Viedma.
                    </p>
                    <a className='btn' href=''>Plano de Viedma</a>

                    <h2>Requisitos para tu atención</h2>

                    Para concretar tu turno y atención médica, es necesario que presentes:
                    <ul>
                        <li><strong>DNI</strong></li>
                        <li><strong>Orden Médica:</strong> La orden médica tiene una validez de treinta (30) días desde la fecha de su
                    prescripción. Vencido ese plazo, deberás concurrir nuevamente a tu médico
                    para confeccionar una nueva. Verificá que contenga los siguientes datos:
                        <ul>
                            <li>Nombre y apellido del paciente</li>
                            <li>Nombre de la obra social y plan de cobertura</li>
                            <li>Número de afiliado del paciente</li>
                            <li>Fecha de emisión</li>
                            <li>Diagnóstico</li>
                            <li>Detalle del estudio que se solicita</li>
                            <li>Firma, sello y número de matrícula del médico</li>
                            <li>Si hay enmiendas deben ser salvadas con firma y sello, usando la misma
                            lapicera y respetando el trazo</li>
                        </ul>
                        </li>
                        <li><strong>Estudios previos:</strong> Si previo a tu nueva consulta te realizaste estudios referentes a los mismos
                            motivos, traelos para que nuestro médico especialista en diagnóstico por imágenes
                            pueda conocer los antecedentes.
                        </li>
                    </ul>
   
                    <h2>Seguridad del paciente</h2>
                    <p>
                    Para estudios de alta complejidad, si estás o creés estar embarazada, o si poseés
                    prótesis, marcapasos, operaciones cardíacas u otros elementos extraños en tu
                    organismo, por favor informalo al momento de solicitar turno.
                    </p>

                    <div className='caja'>
                        <div className='izq'>
                        <h2>Resultados online</h2>
                        <p>
                        Accedé a tus estudios desde donde estés, de manera rápida, exclusiva y
                        segura.</p>
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
                        <a href='' target='_blank' className='btn' >VER MIS ESTUDIOS</a>
                        </div>
                        <div className='der'>
                            
                        </div>
                    </div>

                    <h2>Preguntas Frecuentes</h2>

                    En Advance queremos despejar tus dudas y brindarte la información que necesitás
                    para llegar a realizarte el estudio con seguridad, confianza y tranquilidad.
                    Descargar Preguntas Frecuentes (botón descarga pdf)

                    Si aún tenés dudas, ponete en contacto con nosotros.

                    ¡Estamos para atenderte!

                    Contactarme (botón a Contacto)

                </div>
            </section>
        )
    }
}

export default Pacientes;