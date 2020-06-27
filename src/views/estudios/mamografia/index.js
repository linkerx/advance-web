import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class EstudioResonancia extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            examenesOpen: null,
            preguntaOpen: null,
            examenes: null,
            preguntas: null 
        }

        this.openExamenes = this.openExamenes.bind(this);
        this.openPregunta = this.openPregunta.bind(this);
    }

    openExamenes(text){
        if (this.state.examenesOpen !== text){
            this.setState({
                examenesOpen: text
            })
        } else {
            this.setState({
                examenesOpen: null
            })
        }
    }

    openPregunta(text){
        if (this.state.preguntaOpen !== text){
            this.setState({
                preguntaOpen: text
            })
        } else {
            this.setState({
                preguntaOpen: null
            })
        }
    }

    render(){
        var classComunes = 'closed';
        var classEspeciales = 'closed';
        var classGuiados = 'closed';

        if(this.state.examenesOpen == 'comunes') {
            classComunes = 'open';
        }
        if(this.state.examenesOpen == 'especiales') {
            classEspeciales = 'open';
        }
        if(this.state.examenesOpen == 'guiados') {
            classGuiados = 'open';
        }
        
        return(
            <section id='estudio-resonancia'>
                <h1>MAMOGRAFÍA</h1>
                <div className='wrapper-central'>
                    <p className='subtitulo'>
                    
                    La mamografía es el estudio radiológico de las glándulas mamarias. 
                    Permite anticipar en años el diagnóstico de cáncer de mama, 
                    ya que a partir de chequeos de rutina es posible detectarlo en sus estadíos iniciales, 
                    incluso antes de que sea palpable o se presenten síntomas.
<br /><br />
<h4>Más comodidad. Mejores resultados.</h4>
<br />
           Contamos con el equipamiento que revoluciona la mamografía a nivel mundial. 
            Se trata de Pristina Dueta de General Electric, 
            el primer mamógrafo de la industria que permite a las propias pacientes determinar el nivel de compresión mamaria, 
            con la ayuda de un control remoto y bajo la supervisión de un técnico. Al brindar mayor comodidad 
            y confianza se obtienen imágenes más profundas y definidas, 
            a partir de las cuales los médicos pueden realizar diagnósticos más precisos.<br /><br /><a href='/equipamiento'>Más información</a>​
                    </p>
                    
                    <img src='/images/estudios/mamografia.jpg' alt='Mamografía' />
                    <h2>Antes del estudio</h2>
                    <ol>
                      <li>El día de la realización de cualquier estudio deberás presentarte 15 minutos antes del turno en la recepción de Advance. 
                          Recordá que este tiempo ha sido reservado para vos. Si no es posible acudir en día y hora convenidos, por favor avisar anticipadamente.
                        </li>
                        <li>Traer los últimos estudios previos relacionados a la práctica.</li>
                        <li>Ante cualquier duda o inquietud, <a href='/contacto'>contactanos</a>​</li>
                    </ol>

                    <h2>Preparaciones</h2>
                    <ol>
                    <li>Es aconsejable que el examen se realice la semana después de la menstruación.</li>
                    <li>No es necesario suspender la medicación que se toma habitualmente.</li>
                    <li>Luego de la higiene personal, no colocarse talcos, desodorantes, perfume o cremas en mamas ni axilas.</li>
                    <li>En caso de estar o poder estar embarazada, informar al momento de solicitar el turno.</li>
                    </ol> 

                    <div className='examenes'>
                    <h2>Tipo de exámenes</h2>
                    <ul>
                        <li>Mamografía Digital Directa - Tridimensional</li>
                    </ul>
                    </div>

                    <h2>Preguntas frecuentes</h2>
                    <div className='preguntas'>
                        <ul>
                        <li>
                                <div className='preg' onClick={() => this.openPregunta(1)}>¿Cómo es el procedimiento? ¿Es invasivo? ¿Es doloroso?</div>
                                <div className={"resp "+(this.state.preguntaOpen === 1 ? 'open' : 'closed')}>En Advance contamos con el equipo más innovador de la industria a nivel mundial, que hace de las mamografías un estudio menos invasivo y doloroso. Se trata del dispositivo Pristina Dueta de General Electric, el primer mamógrafo que permite a las propias pacientes determinar el nivel de compresión mamaria, con la ayuda de un control remoto y bajo la supervisión de un técnico. Al brindar mayor comodidad y confianza a las pacientes se obtienen imágenes más profundas y definidas, a partir de las cuales los médicos pueden realizar diagnósticos más precisos. 
Para saber más sobre nuestro equipamiento, ingresar <a href='/equipamiento'>aqui</a>​ .</div>
                            </li>

                            <li>
                                <div className='preg' onClick={() => this.openPregunta(2)}>¿Cuánto tarda el estudio?</div>
                                <div className={"resp "+(this.state.preguntaOpen === 2 ? 'open' : 'closed')}>El proceso completo tarda entre 15 y 20 minutos.</div>
                            </li>
 
                            <li>
                                <div className='preg' onClick={() => this.openPregunta(3)}>¿Puede hacerse durante el período?</div>
                                <div className={"resp "+(this.state.preguntaOpen === 3 ? 'open' : 'closed')}>Es aconsejable que el examen se realice la semana después de la menstruación.</div>
                            </li>

                            <li>
                                <div className='preg' onClick={() => this.openPregunta(4)}>¿Me produce algún daño hacerme una mamografía?</div>
                                <div className={"resp "+(this.state.preguntaOpen === 4 ? 'open' : 'closed')}>Teniendo en cuenta los mitos que existen sobre la radiación de la mamografía, es importante aclarar que la dosis que se recibe durante el estudio es muy baja: equivale a un 2% de la radiación del medioambiente a la que estamos expuestos todos los días.
.</div>
                            </li>

                            <li>
                                <div className='preg' onClick={() => this.openPregunta(5)}>¿A partir de qué edad y con qué periodicidad debo realizarme una mamografía?
</div>
                                <div className={"resp "+(this.state.preguntaOpen === 5 ? 'open' : 'closed')}>Se recomienda realizar una mamografía anual a partir de los 40 años a todas aquellas mujeres asintomáticas, con estudios clínicos normales y sin antecedentes de la enfermedad.

<br />En las pacientes con antecedentes de cáncer de mama en familiares de 1° grado (madre, hermana) se recomienda iniciar con la mamografía 10 años antes de la edad de detección del cáncer del familiar más cercano.
</div>
                            </li>

                            <li>
                                <div className='preg' onClick={() => this.openPregunta(6)}>¿Es necesario utilizar un protector tiroideo durante la mamografía?</div>
                                <div className={"resp "+(this.state.preguntaOpen === 6 ? 'open' : 'closed')}>Si bien no es necesario, en Advance lo proveemos a las pacientes que lo soliciten.</div>
                            </li>

                            <li>
                                <div className='preg' onClick={() => this.openPregunta(7)}>¿La mamografía sirve para prevenir o tengo que tener algún síntoma para realizarme el estudio?</div>
                                <div className={"resp "+(this.state.preguntaOpen === 7 ? 'open' : 'closed')}>
                                La mamografía permite anticipar en años el diagnóstico de cáncer de mama. 
                                Es decir, a partir de chequeos de rutina es posible detectarlo en sus estadíos iniciales, 
                                incluso antes de que sea palpable o se presenten síntomas.
</div>  
                            </li>

                            <li>
                                <div className='preg' onClick={() => this.openPregunta(8)}>¿Por qué es importante la detección precoz?</div>
                                <div className={"resp "+(this.state.preguntaOpen === 8 ? 'open' : 'closed')}>La detección temprana es fundamental, ya que los tumores de menos de un centímetro tienen hasta el 90% de probabilidades de curación. La mamografía tiene una alta sensibilidad para detectar lesiones pequeñas (nódulos, distorsiones o microcalcificaciones) que pueden ser malignas mucho antes que sean palpables o evidencien alguna alteración morfológica en la mama.
</div>
                            </li>

                            <li>
                                <div className='preg' onClick={() => this.openPregunta(9)}>Si me realizo ecografías y autoexámenes mamarios, ¿son necesarias las mamografías de rutina?
</div>
                                <div className={"resp "+(this.state.preguntaOpen === 9 ? 'open' : 'closed')}>La ecografía y el autoexamen mamario son complementarios y ayudan a un diagnóstico temprano, pero en ningún caso sustituyen la mamografía.
</div>
                            </li>


                        </ul>
                    </div>
                    <div className='clearfix'></div>
                </div>
            </section>
        )
    }
}

export default EstudioResonancia;