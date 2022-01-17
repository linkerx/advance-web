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
                <h1>RESONANCIA MAGNÉTICA</h1>
                <div className='wrapper-central'>
                    <p className='subtitulo'>
                    La Resonancia Magnética (RM) es un método de diagnóstico que
                    permite obtener imágenes detalladas de los órganos y tejidos internos
                    sin utilizar rayos X.
                    Utiliza un fuerte campo magnético y ondas de radiofrecuencia que
                    permiten la formación de imágenes.
                    El examen es simple y no produce efectos colaterales. Es un estudio de
                    diagnóstico por imágenes moderno, inofensivo e indoloro.
                    </p>
                    <img src='/images/estudios/resonancia.jpg' alt='Resonancia Magnética' />
                    <h2>Antes del estudio</h2>
                    <ol>
                        <li>
                            Al momento de solicitar el turno es importante que avises:
                            <ul>
                                <li>Si tu peso supera los 150 kg.</li>
                                <li>Si tenés marcapaso, implantes o prótesis metálicas, clips de
                    aneurisma, implantes auditivos, válvulas artificiales,
                    neuroestimulantes, bombas para medicamentos, proyectiles o
                    cuerpos extraños metálicos.</li>
                                <li>Si estás transitando el primer trimestre de embarazo o sospechás estar embarazada.</li>
                            </ul>
                        </li>
                        <li>
                        Si su estudio fue solicitado con contraste endovenoso, como paciente
                    deberás:
                            <ul>
                                <li>Completar y firmar el consentimiento informado.</li>
                                <li>Avisar si padecés de insuficiencia renal. Si la respuesta es afirmativa y no estás en diálisis, 
                                    se te solicitará previamente un examen de creatininemia. Si estás en diálisis, no será necesario.</li>
                                <li>Avisar si sufriste reacciones adversas al gadolinio en estudios
                    previos.</li>
                                <li>Avisar si tenés antecedentes de reacciones alérgicas que requieran
                    tratamiento.</li>
                                <li>Se recomienda previo y posterior al estudio la ingestión de
                    abundante líquido (agua).</li>
                            </ul>
                        </li>
                        <li>El día del turno, concurrir con ropa cómoda y sin maquillaje y sin cualquier objeto metálico como: 
                            joyas, anillos, pinzas de pelo, lentes de contacto, reloj, etc.
                        </li>
                        <li>Deberás presentarte 15 minutos antes del turno en la recepción de
                    Advance, excepto en el caso de la Enteroresonancia que deberás
                    presentarte 60 minutos antes del turno.</li>
                        <li>Traer los últimos estudios previos relacionados a la práctica.</li>
                        <li>Recordá que este tiempo ha sido reservado para vos. Si no es posible
                    acudir en día y hora convenidos, por favor avisar anticipadamente.
                    Ante cualquier duda o inquietud, <a href='/contacto'>contactanos</a>​.</li>
                    </ol> 

                    <div className='examenes'>
                    <h2>Tipo de exámenes</h2>
                    <ul>
                        <li className='categoria' onClick={() => this.openExamenes('comunes')}>
                        <span>Estudios comunes </span>
                        <div>
                            { this.state.examenesOpen === 'comunes'
                            ?
                                <i className="fas fa-sort-up"></i>
                            :
                                <i className="fas fa-sort-down"></i>
                            }
                        </div>
                            <ul className={classComunes}>
                                <li>RM musculoesquelético sin contraste (gadolinio):
                                    <ul>
                                        <li>-articulaciones: hombro, codo, muñeca, cadera, pelvis, rodilla, tobillo, mano
                                        y pié.</li>
                                        <li>-extremidades: brazo, antebrazo, muslo y pierna.</li>
                                        <li>-columna cervical, dorsal y lumbosacra</li>
                                    </ul>
                                </li>
                                <li>RM de cerebro sin contraste</li>
                                <li>RM de cerebro con contraste</li>
                                <li>RM de cuello sin contraste</li>
                                <li>RM de cuello con contraste</li>
                                <li>RM de macizo facial</li>
                                <li>RM de tórax sin contraste</li>
                                <li>RM de tórax con contraste</li>
                                <li>Colangio RM sin gadolinio</li>
                                <li>Colangio RM con gadolinio</li>
                                <li>RM de abdomen sin contraste</li>
                                <li>RM de abdomen con contraste</li>
                                <li>RM hepática específica para cuantificación de hierro (hemocromatosis,
                    hemosiderosis)</li>
                                <li>RM de glándulas suprarrenales con secuencias IN PHASE/OUT PHASE</li>
                                <li>RM de pelvis sin contraste</li>
                                <li>RM de pelvis con contraste</li>
                                <li>RM de próstata multiparamétrica</li>
                                <li>URO-RM con contraste</li>
                                <li>URO-RM con contraste</li>
                                <li>RM de testículos</li>
                            </ul>
                        </li>
                        <li className='categoria' onClick={() => this.openExamenes('especiales')}><span>Estudios especiales</span>
                        <div>
                            { this.state.examenesOpen === 'especiales'
                            ?
                                <i className="fas fa-sort-up"></i>
                            :
                                <i className="fas fa-sort-down"></i>
                            }
                        </div>
                            <ul className={classEspeciales}>
                                <li>Neuroradiología:
                                    <ul>
                                        <li>-espectroscopia</li>
                                        <li>-estudio de perfusión con medio de contraste (DCE)</li>
                                        <li>-difusión (DWI) y tensor de difusión</li>
                                        <li>-angio RM cerebral mediante técnica en tiempo de vuelo (TOF), contraste
                                        de fase</li>
                                        <li>-protocolo de volumetría para tumores</li>
                                        <li>-angio RM de cerebro con contraste ev</li>
                                    </ul>
                                </li>
                                <li>Angio RM de cuello</li>
                                <li>Angio RM de miembros superiores</li>
                                <li>Angio RM de miembros inferiores</li>
                                <li>Entero RM</li>
                                <li>RM de mama sin contraste (para implantes)</li>
                                <li>RM de mama con contraste</li>
                                <li>RM de mama con contraste y análisis de curvas de perfusión</li>
                                <li>RM de mama con contraste y secuencias de difusión</li>
                                <li>RM fetal</li>
                                <li>RM de placenta</li>
                                <li>RM de plexo braquial</li>
                                <li>RM de plexo lumbosacro</li>
                                <li>RM para evaluación de nervios periféricos</li>
                                <li>RM para evaluación de pares craneanos</li>
                                <li>RM de dedo (con bobina flex específica)</li>
                                <li>ArtroRM de hombro, codo, muñeca, cadera y rodilla</li>
                                <li>RM dinámica de ATM</li>
                                <li>RM de pelvis de ALTA RESOLUCIÓN (para estudio de recto y útero)</li>
                                <li>RM de pelvis (PROTOCOLO PARA PROLAPSO Y DEFECOGRAFIA)</li>
                                <li>RM corporal total</li>
                            </ul>
                        </li>
                    </ul>
                    </div>

                    <h2>Preguntas frecuentes</h2>
                    <div className='preguntas'>
                        <ul>
                        <li>
                                <div className='preg' onClick={() => this.openPregunta(1)}>¿Qué sucede durante el procedimiento?</div>
                                <div className={"resp "+(this.state.preguntaOpen === 1 ? 'open' : 'closed')}>Durante el examen el paciente será monitoreado y observado por cámaras de
                    video. Además, tendrá en su mano un timbre que lo podrá utilizar para
                    comunicarse con el técnico responsable de realizar el estudio.</div>
                            </li>

                            <li>
                                <div className='preg' onClick={() => this.openPregunta(2)}>¿Cuanto tarda el procedimiento?</div>
                                <div className={"resp "+(this.state.preguntaOpen === 2 ? 'open' : 'closed')}>En promedio, el procedimiento demora entre 15 y 20 minutos, dependiendo del
estudio.</div>
                            </li>

                            <li>
                                <div className='preg' onClick={() => this.openPregunta(3)}>¿Es peligroso o produce dolor realizarse una resonancia magnética?</div>
                                <div className={'resp '+(this.state.preguntaOpen === 3 ? 'open' : 'closed')}>La resonancia magnética es un estudio totalmente indoloro. Simplemente el
                    paciente debe permanecer inmóvil dentro del equipamiento, en forma horizontal.
                    Los campos magnéticos no producen ningún daño conocido a los tejidos al no
                    tratarse de radiaciones ionizantes tipo rayos X, así que no emite ningún tipo de
                    radiación peligrosa, ni surgen complicaciones posteriores.</div>
                            </li>
                            <li>
                                <div className='preg' onClick={() => this.openPregunta(4)}>¿El estudio es ruidoso?</div>
                                <div className={'resp '+(this.state.preguntaOpen === 4 ? 'open' : 'closed')}>La máquina emite un ruido fuerte como de martilleo o golpes en algunas fases
                    que es totalmente normal, por lo que el paciente no debe asustarse o preocuparse
                    por ello.</div>
                            </li>
                            <li>
                                <div className='preg' onClick={() => this.openPregunta(5)}>¿Qué pasa si siento sensación de encierro?</div>
                                <div className={'resp '+(this.state.preguntaOpen === 5 ? 'open' : 'closed')}>Al tener el resonador magnético forma de túnel, cualquier persona puede
experimentar cierta sensación de encierro. Si es tu caso, podés hablarlo con el
médico o técnico a cargo del estudio. Esto no constituye una contraindicación y se
podría llevar adelante el procedimiento sin inconvenientes.</div>
                            </li>
                            <li>
                                <div className='preg' onClick={() => this.openPregunta(6)}>¿Qué sucede si tengo piercing, prótesis, tatuaje, ortodoncia o marcapasos?
                    ¿Qué metales son peligrosos o están contraindicados?</div>
                                <div className={'resp '+(this.state.preguntaOpen === 6 ? 'open' : 'closed')}>
                                <ol>
                                <li>El marcapasos cardíaco o desfibrilador implantable está contraindicado. Es
decir, en estos casos no se puede realizar una resonancia magnética.</li>
<li>Los ​artículos peligrosos para la salud o que ​podrían causar otros problemas
durante una resonancia magnética son:<ul>

<li>Sujetador metálico puesto para evitar el sangrado en un aneurisma
intracraneal.</li>
<li>Catéter con componentes metálicos que pueden tener el riesgo de producir
quemaduras.</li>
<li>Bomba para medicamentos (por ejemplo, las utilizadas para administrar
insulina o analgésicos)</li>
<li>Existencia en el interior del cuerpo de trozos de balas, perdigón, metralla, u
algún tipo de esquirla metálica ocular y orbitaria
En estos casos, se deberá informar al momento de solicitar el turno y concurrir al
estudio con autorización médica.</li>
</ul>

</li>
<li>La presencia de los siguientes objetos no genera inconvenientes para la
realización de una resonancia magnética:
<ul>
<li>Piercing (sólo se calienta la zona)</li>
<li>Válvulas de derivación</li>
<li>Filtros vasculares</li>
<li>Alambres de embolización</li>
<li>Presencia de neuroestimulador</li>
<li>Existencia de tatuaje</li>
<li>Presencia de estimulador de crecimiento óseo</li>
<li>Los ​empastes dentales metálicos y los ​aparatos de ortodoncia en
general no son afectados por el campo magnético, pero sí pueden
distorsionar las imágenes de la cara o el cerebro</li></ul>
</li>
</ol>
                                </div>
                            </li>
                            <li>
                                <div className='preg' onClick={() => this.openPregunta(7)}>¿Las embarazadas pueden realizarse resonancias?</div>
                                <div className={'resp '+(this.state.preguntaOpen === 7 ? 'open' : 'closed')}>En caso de embarazo o sospecha de embarazo, 
                                se deberá informar al momento de solicitar el turno. La posibilidad de realizar el estudio dependerá de cada caso en particular.</div>
                            </li>
                            <li>
                                <div className='preg' onClick={() => this.openPregunta(8)}>¿Las mujeres en período de lactancia pueden realizarse resonancias?</div>
                                <div className={'resp '+(this.state.preguntaOpen === 8 ? 'open' : 'closed')}>Sí, las mujeres en período de lactancia pueden realizar el estudio.</div>
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