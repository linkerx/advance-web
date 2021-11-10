import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class EstudioEcografia extends React.Component {

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
        var classGenerales = 'closed';
        var classEspeciales = 'closed';
        var classEcoddopler = 'closed';
        var classGuiados = 'closed';

        if(this.state.examenesOpen == 'generales') {
            classGenerales = 'open';
        }
        if(this.state.examenesOpen == 'ecoddopler') {
            classEcoddopler = 'open';
        }
        if(this.state.examenesOpen == 'especiales') {
            classEspeciales = 'open';
        }
        if(this.state.examenesOpen == 'guiados') {
            classGuiados = 'open';
        }

        return(
            <section id='estudio-ecografia'>
                <h1>ECOGRAFÍA</h1>
                <div className='wrapper-central'>
                    <div className='intro'>
                        <p className='subtitulo'>
                        La ecografía es un método de diagnóstico que utiliza ondas de ultrasonidos
                        para obtener imágenes de los órganos internos del cuerpo.
                        Su técnica es sencilla, rápida, segura e indolora.
                        </p>
                    </div>

                    <img src='/images/estudios/ecografia.png' alt='Ecografías'/>

                    <h2>Antes del estudio</h2>
                    <ol>
                        <li>El día de la realización de cualquier estudio, deberás presentarte 15 minutos antes del turno en la recepción de Advance. 
                            Recordá que este tiempo ha sido reservado para vos. Si no es posible acudir en día y hora convenidos, 
                            por favor avisar anticipadamente.</li>
                        <li>Traer los últimos estudios previos relacionados a la práctica.</li>
                        <li>Ante cualquier duda o inquietud, contactanos​ (link a “Contacto”).</li>
                    </ol>

                    <h2>Preparaciones ecográficas</h2>
                    <ul className='preparaciones'>
                        <li>En el caso de ecografía ginecológica (suprapública o endovaginal), renal, vesical vesicoprostática u obstétrica del primer trimestre (hasta la semana 12 de embarazo), 
                            se requiere tomar 1 litro de agua 1 hora antes del estudio.</li>
                        <li>En el caso de ecografía mamaria, no usar desodorante.</li>
                        <li>Para ecografía abdominal, los adultos deberán acudir al estudio con 8 horas de ayunas, los niños con 6 horas de ayunas y los lactantes con 3 horas de ayunas.</li>
                    
                    </ul>

                    <div className='examenes'>
                    <h2>Tipo de exámenes</h2>
                    <ul>
                        <li className='categoria' onClick={() => this.openExamenes('generales')}>
                        <span>Generales</span>
                        <div>
                            { this.state.examenesOpen === 'generales'
                            ?
                                <i className="fas fa-sort-up"></i>
                            :
                                <i className="fas fa-sort-down"></i>
                            }
                        </div>
                            <ul className={classGenerales}>
                                <li>Ecografía abdominal, hepatobiliar</li>
                                <li>Ecografía ginecológica suprapúbica y endovaginal</li>
                                <li>Ecografía mamaria</li>
                                <li>Ecografía obstétrica general</li>
                                <li>Ecografía renal y vesical</li>
                                <li>Ecografía vesicoprostática suprapúbica y endorectal</li>
                                <li>Ecografía de caderas</li>
                                <li>Ecografía cerebral transfontanelar</li>
                                <li>Ecografía de partes blandas: muscular, articular</li>
                                <li>Ecografía tiroidea</li>
                                <li>Ecografía de cuello</li>
                                <li>Ecografía testicular y escrotal</li>
                                <li>Ecografía de pared abdominal</li>
                                <li>Ecografía de región inguinal</li>
                                <li>Ecografía pleural</li>
                                <li>Ecografía ocular</li>
                             </ul>
                        </li>
                        <li className='categoria' onClick={() => this.openExamenes('ecoddopler')}>
                        <span>Ecodoppler</span>
                        <div>
                            { this.state.examenesOpen === 'ecoddopler'
                            ?
                                <i className="fas fa-sort-up"></i>
                            :
                                <i className="fas fa-sort-down"></i>
                            }
                        </div>
                            <ul className={classEcoddopler}>
                                <li>Ecodoppler testicular</li>
                                <li>Ecodoppler tiroideo</li>
                                <li>Ecodoppler ocular</li>
                                <li>Ecodoppler arterial de miembros superiores</li>
                                <li>Ecodoppler arterial de miembros inferiores</li>
                                <li>Ecodoppler carotídeo</li>
                                <li>Ecodoppler venoso de miembros superiores</li>
                                <li>Ecodoppler venoso de miembros inferiores</li>
                                <li>Ecodoppler con evaluación Power Doppler de articulaciones
                                (Reumatología)</li>
                                <li>Ecodoppler cardíaco color. Incluye Ecocardiograma bidimensional o 2D</li>
                                <li>Ecodoppler de vasos del cuello (doppler carotídeo)</li>
                                <li>Ecodoppler arterial de miembros inferiores</li>
                                <li>Ecodoppler de aorta abdominal</li>
                            </ul>
                        </li>
                        <li className='categoria' onClick={() => this.openExamenes('especiales')}>
                        <span>Especiales</span>
                        <div>
                            { this.state.examenesOpen === 'especiales'
                            ?
                                <i className="fas fa-sort-up"></i>
                            :
                                <i className="fas fa-sort-down"></i>
                            }
                        </div>
                            <ul className={classEspeciales}>
                                <li>Fertilidad
                                    <ul>
                                        <li>ecodoppler ginecológico transvaginal</li>
                                    </ul>
                                </li>
                                <li>Obstétricas
                                    <ul>
                                        <li>traslucencia Nucal (Fetal Test)</li>
                                        <li>sonograma genético (screening de cromosomopatías)</li>
                                        <li>anatomía fetal temprana</li>
                                        <li>ecografía obstétrica morfológica</li>
                                        <li>ecografías 4D y 5D</li>
                                        <li>ecodoppler obstétrico</li>
                                    </ul> 
                                </li>
                                <li>Obstétricas área de cardiología
                                    <ul>
                                        <li>ecocariograma fetal</li>
                                    </ul>
                                </li>
                                <li>Elastografía hepática</li>
                            </ul>
                        </li>

                        <li className='categoria' onClick={() => this.openExamenes('guiados')}>
                        <span>Intervencionismo guiado por ecografía</span>
                        <div>
                            { this.state.examenesOpen === 'guiados'
                            ?
                                <i className="fas fa-sort-up"></i>
                            :
                                <i className="fas fa-sort-down"></i>
                            }
                        </div>
                            <ul className={classGuiados}>
                                  <li>Punción de tiroides</li>
                                  <li>Punción mamaria</li>
                                  <li>Punción de próstata</li>
                            </ul>
                        </li>
                    </ul>
                    </div>

                    <h2>Preguntas frecuentes</h2>
                    <div className='preguntas'>
                        <ul>
                        <li>
                                <div className='preg' onClick={() => this.openPregunta(1)}>¿Qué es la ecografía Ecoddopler? ¿Qué permite diagnosticar?</div>
                                <div className={"resp "+(this.state.preguntaOpen === 1 ? 'open' : 'closed')}>Es un tipo especial de ecografía que permite examinar el estado del corazón, las
                                arterias y de las venas. Con ella se evalúa: función cardíaca, velocidad de flujo
                                sanguíneo, calibre, permeabilidad, obstrucción, etc. El método de realización es el
                                mismo que el de la ecografía convencional.</div>
                            </li>
                       </ul>
                    </div>

                    <div className='clearfix'></div>
                </div>
            </section>
        )
    }
}

export default EstudioEcografia;