import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class EstudioTomografia extends React.Component {

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
        var classContraste = 'closed';
        var classEspeciales = 'closed';
        var classCardio = 'closed';
        var classGuiadas = 'closed';

        if(this.state.examenesOpen == 'comunes') {
            classComunes = 'open';
        }
        if(this.state.examenesOpen == 'contraste') {
            classContraste = 'open';
        }
        if(this.state.examenesOpen == 'especiales') {
            classEspeciales = 'open';
        }
        if(this.state.examenesOpen == 'guiadas') {
            classGuiadas = 'open';
        }
        if(this.state.examenesOpen == 'cardio') {
            classCardio = 'open';
        }

        return(
            <section id='estudio-tomografia'>
                <h1>TOMOGRAFÍA COMPUTADA</h1>
                <div className='wrapper-central'>
                    <div className='intro'>
                        <p>La Tomografía Computada Multislice es un procedimiento no invasivo que
                        utiliza rayos X para obtener imágenes de distintos tipos de tejidos.</p>
                        <p>Es indoloro, rápido y sencillo, y puede ser utilizado como guía para biopsias,
                        marcaciones para radioterapia, bloqueos radiculares y otros procedimientos.</p>
                        <p>Las ventajas son el tiempo que dura la realización de los estudios, la mejora
                        de la caracterización de estructuras vasculares, y la posibilidad de las
                        reconstrucciones en 3D y 2D. Además, permite realizar colonoscopía,
                        angiografía coronaria no invasiva, broncoscopía e imágenes odontológicas.</p>
                    </div>

                    <img src='/images/estudios/tomografo.jpg' alt='Tomografías Computdas' />

                    <h2>Antes del estudio:</h2>

                    <ol>
                    <li>
                        Al momento de solicitar el turno es importante que avises:
                        <ul>
                            <li>Si tu peso supera los 180 kg.</li>
                            <li>Si estás embarazada o sospechás estarlo, o si te encontrás en periodo de lactancia.</li>
                        </ul>
                    </li>
                    <li>
                        Si el estudio fue solicitado con contraste endovenoso, como paciente deberás:
                        <ul>
                            <li>Completar y firmar el interrogatorio clínico y el consentimiento informado.</li>
                            <li>Avisar si padecés de insuficiencia renal. Si la respuesta es afirmativa,
                            se solicitará previamente un examen de creatininemia.</li>
                            <li>Avisar si sufriste reacciones adversas al gadolinio en estudios previos.</li>
                            <li>Avisar si tenés antecedentes de reacciones alérgicas que requieren
                            tratamiento.</li>
                            <li>Se recomienda previo y posterior al estudio la ingestión de abundante
                            líquido (agua).</li>
                        </ul>
                    </li>
                    <li>
                        Traer los últimos estudios previos relacionados a la práctica.
                    </li>
                    <li>
                        Recordá que este tiempo ha sido reservado para vos. Si no es posible acudir en día 
                        y hora convenidos, por favor avisar anticipadamente.
                    </li>
                    <li>
                        Ante cualquier duda o inquietud, <Link to='/contacto'>Contactanos</Link>.
                    </li>
                    </ol>

                    <div className='examenes'>
                    <h2>Tipo de exámenes</h2>
                    <ul>
                        
                        <li className='categoria' onClick={() => this.openExamenes('comunes')}>
                        <span>TC comunes</span>
                        <div>
                            { this.state.examenesOpen === 'comunes'
                            ?
                                <i className="fas fa-sort-up"></i>
                            :
                                <i className="fas fa-sort-down"></i>
                            }
                        </div>
                            <ul className={classComunes}>
                                <li>TC de cerebro sin contraste</li>
                                <li>TC de cráneo</li>
                                <li>TC de órbitas sin contraste</li>
                                <li>TC de oídos sin contraste</li>
                                <li>TC de macizo facial sin contraste</li>
                                <li>TC de senos paranasales sin contraste</li>
                                <li>TC de cuello sin contraste</li>
                                <li>TC de tórax sin contraste</li>
                                <li>TC de tórax sin contraste de baja dosis</li>
                                <li>TCAR (tomografía de tórax de alta resolución)/secuencias en inspiración y espiración</li>
                                <li>TC de abdomen sin contraste</li>
                                <li>TC de pelvis sin contraste</li>
                                <li>TC de extremidades
                                    <ul>
                                        <li>brazo</li>
                                        <li>antebrazo</li>
                                        <li>mano</li>
                                        <li>muslo</li>
                                        <li>pierna</li>
                                        <li>pié</li>
                                    </ul>
                                </li>
                                <li>y articulaciones sin contraste<ul>
                                        <li>hombro</li>
                                        <li>codo</li>
                                        <li>muñeca</li>
                                        <li>pelvis ósea</li>
                                        <li>cadera</li>
                                        <li>rodilla</li>
                                        <li>tobillo</li>
                                    </ul>
                                </li>
                                <li>TC de columna cervical, dorsal y lumbosacra sin contraste</li>
                                <li>URO-TC sin contraste ev</li>
                                </ul>
                        </li>

                        <li className='categoria' onClick={() => this.openExamenes('contraste')}>
                        <span>TC con contraste</span>
                        <div>
                            { this.state.examenesOpen === 'contraste'
                            ?
                                <i className="fas fa-sort-up"></i>
                            :
                                <i className="fas fa-sort-down"></i>
                            }
                        </div>
                            <ul className={classContraste}>
                                <li>TC de cerebro con contraste ev</li>
                                <li>TC de órbitas con contraste ev</li>
                                <li>TC de cuello con contraste ev</li>
                                <li>TC de tórax con contraste ev</li>
                                <li>TC de abdomen con contraste ev</li>
                                <li>TC de pelvis con contraste ev</li>
                                <li>TC de páncreas con contraste trifásico (protocolo para páncreas)</li>
                                <li>TC hepática con contraste trifásico (protocolo para hígado)</li>
                                <li>TC de extremidades y articulaciones con contraste ev</li>
                            </ul>
                        </li>

                        <li className='categoria' onClick={() => this.openExamenes('especiales')}>
                        <span>TC especiales</span>
                        <div>
                            { this.state.examenesOpen === 'especiales'
                            ?
                                <i className="fas fa-sort-up"></i>
                            :
                                <i className="fas fa-sort-down"></i>
                            }
                        </div>
                            <ul className={classEspeciales}>
                                <li>Artro TC de articulaciones 
                                    <ul>
                                        <li>hombro</li>
                                        <li>codo</li>
                                        <li>muñeca</li>
                                        <li>cadera</li>
                                        <li>rodilla</li>
                                        <li>tobillo</li>
                                        <li>etc</li>
                                    </ul>
                                </li>
                                <li>Reconstrucción 3D de las mencionadas anteriormente</li>
                                <li>TC de articulación femoropatelar</li>
                                <li>Angio TC de cerebro</li>
                                <li>Angio TC de tórax (protocolo para TEP)</li>
                                <li>Angio TC de abdomen y pelvis</li>
                                <li>Angio TC de aorta toráxica</li>
                                <li>Angio TC de miembros superiores y/o inferiores</li>
                                <li>Angio TC de tórax, adomen y pelvis</li>
                                <li>Entero TC</li>
                                <li>URO-TC</li>
                            </ul>
                        </li>

                        <li className='categoria' onClick={() => this.openExamenes('cardio')}>
                        <span>TC de cardiología</span>
                        <div>
                            { this.state.examenesOpen === 'cardio'
                            ?
                                <i className="fas fa-sort-up"></i>
                            :
                                <i className="fas fa-sort-down"></i>
                            }
                        </div>
                            <ul className={classCardio}>
                                <li>Coronariografía no invasiva</li>
                            </ul>
                        </li>
                        <li className='categoria' onClick={() => this.openExamenes('guiadas')}>
                        <span>Intervenciones guiadas por TC</span>
                        <div>
                            { this.state.examenesOpen === 'guiadas'
                            ?
                                <i className="fas fa-sort-up"></i>
                            :
                                <i className="fas fa-sort-down"></i>
                            }
                        </div>
                            <ul className={classGuiadas}>
                                <li>PAAF-Tru Cut
                                    <ul>
                                        <li>pulmón
                                            <ul>
                                                <li>masas</li>
                                                <li>nódulos (incluidos subcentimétricos)</li>
                                            </ul>
                                        </li>
                                        <li>mediastino</li>
                                        <li>abdomen
                                            <ul>
                                                <li>lesiones hepáticas focales y difusas</li>
                                                <li>suprarrenales</li>
                                                <li>ganglios linfáticos</li>
                                                <li>páncreas</li>
                                                <li>implantes peritoneales</li>
                                            </ul>
                                        </li>
                                        <li>músculo esquelético
                                            <ul>
                                                <li>óseo</li>
                                                <li>de partes blandas</li>
                                            </ul>
                                        </li>
                                        <li>bloqueos
                                            <ul>
                                                <li>cervicales</li>
                                                <li>dorsales</li>
                                                <li>lumbares</li>
                                                <li>sacroilíacos</li>
                                                <li>intraarticulares</li>
                                                <li>plasma rico en plaquetas</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </div>

                    <h2>Preguntas frecuentes</h2>
                    <ul>
                        <li>¿Cómo es el procedimiento? ​(respuesta desplegable)</li>
                        <li>¿Es peligroso o produce dolor? ( ​ respuesta desplegable)</li>
                        <li>¿Es ruidoso? ​(respuesta desplegable)</li>
                        <li>¿Qué pasa si soy claustrofóbico? ​(respuesta desplegable)</li>
                        <li>¿Qué sucede si tengo piercing, prótesis, tatuaje, ortodoncia o
                        marcapasos? ¿Qué metales son peligrosos o están contraindicados?
                        (respuesta desplegable)</li>
                        <li>¿Las embarazadas pueden realizarse una tomografía computada?
                        (respuesta desplegable)</li>
                        <li>¿Las mujeres en período de lactancia pueden realizarse una
                        tomografía computada? ( ​ respuesta desplegable)</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default EstudioTomografia;