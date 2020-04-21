import React from 'react';
import './styles.scss';

class Equipamiento extends React.Component {
    render(){
        return(
            <section id='equipamiento'>
            <h1>EQUIPAMIENTO</h1>

                <p className='subtitulo'>
                Trabajamos con equipamiento nuevo y de última generación que
                garantizan la calidad de nuestros servicios y posicionan a Advance al
                nivel de los mejores centros de diagnósticos por imágenes del país.
                </p>

                <div className='equipos'>
                <ul>
                <li>
                    <img src='/images/equipos/resonador.jpg' />

                    <div className='info'>

                    <h3>RESONADOR
                    SIGNA CREATOR de 1.5 Tesla.</h3>
                    <strong>
                    General Electric. Año 2019
                    </strong>

                    <ul>
                    <li>
                        Permite poder obtener imágenes más
                        profundas, mejor definidas.
                    </li>
                    <li>
                        Tiene una velocidad de proceso
                        mayor lo que permite acortar los
                        tiempos de los estudios para los
                        pacientes.
                    </li>
                    <li>
                        Contiene herramientas de software
                        precisas y poderosas que le permite a
                        los médicos realizar mejores informes
                        y con mejor calidad de detalle, con
                        imágenes disponibles de manera casi
                        instantánea.
                    </li>
                    <li>
                        Es un equipo de última generación
                        utilizado sólo en centros de imágenes
                        de excelencia.
                    </li>
                    </ul>
                    </div>

                </li>

                <li>

                <img src='/images/comp/3072.jpg' />
                <div className='info'>
                <h3>TOMÓGRAFO
                REVOLUCIÓN EVO de 128 canales.</h3>
                <strong>General Electric. Año 2019</strong>

                <ul>
                <li>Permite ver con mayor claridad. El
                nuevo sistema de adquisición de
                imágenes Clarity ofrece una mejora de
                hasta un 100% de la resolución
                espacial con respecto a los escáneres
                de TC anteriores de GE1.
                </li>
                <li>Con el innovador método de
                reconstrucción iterativa ASiR-V* se
                reduce la dosis hasta en un 82% en
                pacientes de todas las edades, al
                tiempo que conserva sus procesos de
                trabajo.
                </li>
                <li>
                Permite realizar más estudios en
                menos tiempo. Con unos protocolos
                más inteligentes y automatizados
                desde la preparación del paciente
                hasta el post procesado, puede
                aumentar hasta en un 40% la eficacia
                del flujo de trabajo.
                </li>
                <li>
                Permite ampliar servicios con estudios
                avanzados como planificación de
                TAVI, CCTA con ritmo cardíaco alto y
                pacientes con implantes.
                </li>
                </ul>
                </div>
                </li>


                <li>

<img src='/images/equipos/ecografo.jpg' />
<div className='info'>
<h3>ECÓGRAFO TOSHIBA Aplio 300.</h3>

<ul>
<li>La arquitectura revolucionaria de formación de la imagen “High Density Beamforming” 
    brinda imágenes de resolución y detalles excepcionales, que permiten obtener diagnósticos en forma rápida y confiable.
</li>
<li>Los sistemas están equipados con un amplio abanico de herramientas clínicas para visualización avanzada, 
cuantificación e intervencionismo tanto para la rutina diaria como para la investigación clínica.</li>
<li>
Entre las herramientas de visualización avanzada se encuentran: Differential Tissue Harmonics (diff-THI);  
Speckle Reduction (SR); Precision Imaging;  Aplipure+; y Tissue Specific Optimization (TSO).
</li>
</ul>
</div>
</li>

{/*<li>

<img src='/images/equipos/mamografo.jpg' />
<div className='info'>

<h3>MAMÓGRAFO Pristina Dueta - General Electric.</h3>
Seleccionado por la revista Time como uno de los mejores inventos científicos del 2019.

<ul>
<li>Primer dispositivo de la industria a nivel mundial que permite a las propias pacientes 
    determinar el nivel de compresión mamaria, con la ayuda de un control remoto y bajo la supervisión de un técnico.
</li>
<li>4 de cada 5 pacientes que usaron Pristina Dueta dijeron que hizo que el examen fuera más cómodo, 
    y más de la mitad dijo que el dispositivo disminuyó la ansiedad.
</li>
<li>
Diseñado por mujeres, el innovador equipo cuenta con apoyabrazos y con un protector facial 
que ofrece un apoyo para la cabeza, permitiendo relajar cuello y hombros.
</li>
<li>Al lograr que la paciente se sienta más cómoda y relajada, se agiliza y facilita todo el proceso y 
    se obtienen imágenes más profundas y definidas que permiten realizar diagnósticos más precisos.
</li>
<li>
El equipo posee partes móviles que ayudan a los técnicos a colocar a 
la paciente en la posición correcta sin hacer esfuerzos físicos.

</li>
</ul>
</div>
</li>*/}


                </ul>
            </div>
        </section>


        )
    }
}

export default Equipamiento;