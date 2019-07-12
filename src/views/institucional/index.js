import React from 'react';
import './styles.scss';

class Institucional extends React.Component {
    render(){
        return(
            <section id='institucional'>
                <h1>INSTITUCIONAL</h1>
                <div className='wrapper-central'>

                <h2>Advance</h2>
                <p>
                    Somos el primer Centro de Diagnóstico por Imágenes de Viedma, capital de
                    Río Negro. ​Nuestro​ equipo está ​conformado​ por médicos especialistas en
                    diagnóstico por imágenes que aseguran la calidad de los servicios. Como
                    personas nos une algo mucho más importante que nuestra profesión: el
                    deseo de acercarte la mejor tecnología, el conocimiento más avanzado y las
                    prestaciones de vanguardia que buscás, contribuyendo a tu bienestar y al
                    desarrollo de la región.
                </p>
                <div className='cajas'>
                    <div> 
                <h2>Misión</h2>
                    <p>
                    Brindar un servicio de diagnóstico por imágenes de excelencia, acercando y
                    poniendo a disposición de la comunidad local y regional tecnología de última
                    generación y conocimiento médico especializado, a través de un trato cálido y
                    personalizado que priorice el bienestar del paciente.
                    </p>
                    </div>
                    <div>
                    <h2>Visión</h2>
                    <p>
                    Ser la institución líder en diagnóstico por imágenes en Viedma y en la región,
                    reconocida por la excelencia médica, la innovación tecnológica, la calidad de
                    la atención y el compromiso con la comunidad médica y los pacientes.
                    </p>
                    </div>
                </div>

                <h2>Valores</h2>
                <p>
                <ul className='valores'>
                    <li><strong>COMPROMISO</strong><br/> con nuestros pacientes, la comunidad médica y la
                sociedad.</li>
                    <li><strong>CALIDAD</strong><br/> de nuestros servicios, equipamiento tecnológico y atención
                médica y administrativa.</li>
                    <li><strong>PROFESIONALISMO</strong><br/> de nuestro equipo médico, innovación y
                capacitación continua.</li>
                </ul>
                </p>

                <h2>Directora Médica</h2>
                <p>
                <h3>Dra. Kathia J. Golab</h3>
                Médica Especialista en Diagnóstico por Imágenes
                <a>Ver CV</a>
                </p>

                <h2>Políticas de calidad</h2>
                <p>
                    Desde un primer momento, en Advance nos propusimos trabajar bajo los
                    siguientes principios:
                    <ul>
                            <li>Atención médica y administrativa de acuerdo con patrones de calidad
                            basados en normas internacionales.</li>
                            <li>Capacitación continua del equipo médico.</li>
                            <li>Equipo médico integrado por especialistas en diagnóstico por
                            imágenes que están ​siempre presente​ y mantienen un diálogo directo
                            con los pacientes.</li>
                            <li>Empleo de equipamiento nuevo y de última generación.</li>
                            <li>Mirada y abordaje integral de la salud y del paciente: tratamos con
                            personas que necesitan una respuesta médica precisa a partir de un
                            trato personalizado y cordial.</li>
                    </ul>
                </p>

                </div>
            </section>
        )
    }
}

export default Institucional;