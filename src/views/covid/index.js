import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

class Covid extends React.Component {

     render(){
        return(
            <section id='covid'>
                <h1>COVID-19 | INFORMACIÓN IMPORTANTE</h1>
                <div className='wrapper-central'>

                    <h2>Conocé nuestro protocolo de trabajo</h2>

                    
                    <div className='imagen'>
                        <img src='/images/otras/advance-entrada-low.jpg' alt='frente' />
                    </div>

                    <p className='subtitulo'>
                    En Advance seguimos atendiendo bajo estrictas normas de seguridad e higiene.<br/><br/>
                    <strong>Nuestra prioridad es cuidarnos entre todos.</strong>
                    </p>

                    <h3>Seguridad e higiene</h3>
                    <ul>
                        <li>Aplicamos un protocolo de limpieza y desinfección especial, de acuerdo a los requerimientos establecidos por autoridades sanitarias.</li>                        
                        <li>Capacitamos en medidas de prevención a todo nuestro personal, tanto médico como administrativo.</li>
                    </ul>
                    <h3>Atención al público</h3>
                    <ul>
                        <li>Restringimos el horario de atención. Mientras dure el aislamiento social, preventivo y obligatorio atenderemos exclusivamente de lunes a viernes de 8.00 a 20.00 horas (sábado y domingo cerrado).</li>                        
                        <li>Todo el personal usa barbijos o tapabocas de acuerdo a las normas establecidas.</li>
                        <li>Colocamos una mampara en la recepción para una mayor protección.</li>                        
                        <li>Tanto en recepción como en cada sala hay disponible alcohol en gel.</li>
                        <li>Al llegar, las recepcionistas realizan consultas de rutina para descartar sintomatología compatible con Covid-19 y, en caso de poseerla, se aplican los procedimientos indicados por el Ministerio de Salud de la Nación.</li>                        
                    </ul>
                    <h3>Servicios</h3>
                    <ul>
                        <li>Todos los servicios funcionan con normalidad, con las precauciones necesarias.</li>                        
                        <li>Seguimos trabajando con la agilidad de siempre: ecografías y tomografías se resuelven en el día, y resonancias dentro de las 48 horas.</li>
                    </ul>
                    <h3>Turnos</h3>
                    <ul>
                        <li>Contamos con una amplia disponibilidad de turnos en el día. Para poder respetar la distancia obligatoria entre personas, se otorgarán de manera espaciada y preferentemente por mail o por teléfono: +54 02920 429957 | info@diagnosticoadvance.com.ar. </li>                        
                        <li>Es obligatorio el uso de barbijo o tapaboca y se solicita en la medida de lo posible concurrir sin acompañantes.</li>
                    </ul>
                    <h3>Resultados Online</h3>
                    <p>En Advance nuestros pacientes tienen la posibilidad de ver los resultados de sus estudios y compartirlos con su médico de manera online, sin moverse de su casa. De la misma forma, los médicos pueden acceder a los resultados de los estudios que indicaron a sus pacientes desde donde estén. </p>
                    <p><strong>¿Cómo?</strong> Ingresando a la plataforma Ver <a href='https://portal.diagnosticoadvance.com.ar/portal/WebLogin.aspx?ReturnUrl=/portal/default.aspx' target='_blank'>Mis Estudios</a> desde nuestra web <NavLink to='/'>diagnosticoadvance.com.ar</NavLink>. En caso de dudas, contactanos.</p>
                    
                    <h3>Sobre el Covid-19</h3>
                    <p>En caso de fiebre asociada a síntomas como tos, dolor de garganta y/o dificultad para respirar, si estás en Río Negro primero llamá al 911.</p>
                    <p className='final'>Estamos atentos a la evolución de la pandemia para actualizar nuestro protocolo,<br/>
                    que nos permite continuar trabajando con la calidad, el profesionalismo y el compromiso de siempre.<br/><br/>
Gracias por confiar en nosotros.</p>
                    <p className='firma'><strong>Dra. Kathia Golab</strong><br/>
Directora Médica<br/>
ADVANCE | Diagnóstico por Imagen</p>
                    <div className='clearfix'></div>
                </div>
            </section>
        )
    }
}

export default Covid;