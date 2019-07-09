import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class EstudioResonancia extends React.Component {
    render(){
        return(
            <section id='estudio-resonancia'>
                <h1>RESONANCIA MAGNÉTICA</h1>
                <div className='wrapper-central'>
                    <div className='intro'>
                        <p>
                        La Resonancia Magnética (RM) es un método de diagnóstico que permite
                        obtener imágenes detalladas de los órganos y tejidos internos sin utilizar
                        rayos X.</p>
                        <p>Utiliza un fuerte campo magnético y ondas de radiofrecuencia que permiten la
                        formación de imágenes.</p>
                        <p>El examen es simple y no produce efectos colaterales. Es un estudio de
                        diagnóstico por imágenes moderno, inofensivo e indoloro.</p>
                    </div>

                    <img src='/images/estudios/resonancia.jpg' alt='Resonancias Magnéticas' />

                    <h2>Antes del estudio</h2>
                    <ol>
                        <li>Al momento de solicitar el turno es importante que avises:
                            <ul>
                                <li>Si tu peso supera los 150 kg.</li>
                                <li>Si tenés marcapaso, implantes o prótesis metálicas, clips de
                                aneurisma, implantes auditivos, válvulas artificiales,
                                neuroestimulantes, bombas para medicamentos, proyectiles o
                                cuerpos extraños metálicos.</li>
                                <li>Si sos claustrofóbico.</li>
                                <li>Si estás embarazada, sospechás estarlo o te encontrás en período
                                de lactancia</li>
                            </ul>
                        </li>
                        <li>Si su estudio fue solicitado con contraste endovenoso, como paciente deberás:
                            <ul>
                                <li>Completar y firmar el interrogatorio clínico y el consentimiento
                                informado.</li>
                                <li>Avisar si padecés de insuficiencia renal. Si la respuesta es afirmativa,
                                se te solicitará previamente un examen de creatininemia.</li>
                                <li>Avisar si sufriste reacciones adversas al gadolinio en estudios
                                previos.</li>
                                <li>Avisar si tenés antecedentes de reacciones alérgicas que requieran
                                tratamiento.</li>
                                <li>Se recomienda previo y posterior al estudio la ingestión de abundante
                                líquido (agua).</li>
                            </ul>
                        </li>
                        <li>El día del turno, concurrir sin maquillaje y sin cualquier objeto metálico
                        como: joyas, anillos, pinzas de pelo, lentes de contacto, reloj, etc.</li>
                        <li>Deberás presentarte 15 minutos antes del turno en la recepción de
                        Advance, excepto en el caso de la Enteroresonancia que deberás
                        presentarte 60 minutos antes del turno.</li>
                        <li>Traer los últimos estudios previos relacionados a la práctica.</li>
                        <li>Recordá que este tiempo ha sido reservado para vos. Si no es posible
                        acudir en día y hora convenidos, por favor avisar anticipadamente.</li>
                        <li>Ante cualquier duda o inquietud, ​<Link to='/contacto'>Contactanos</Link>.</li>
                    </ol>
                    <h2>Tipo de exámenes</h2>
                    <ul>
                        <li>Estudios comunes ​(listado desplegable)</li>
                        <li>Estudios especiales ( ​ listado desplegable)</li>
                        <li>Estudios guiados por resonancia magnética ​(listado desplegable)</li>
                    </ul>

                    <h2>Preguntas frecuentes</h2>
                    <ul>
                        <li>¿Qué sucede durante el procedimiento? ​(respuesta desplegable)
                            <div>Durante el examen el paciente será monitoreado y observado por
                            cámaras de video. Además, tendrá en su mano un timbre que lo podrá
                            utilizar para comunicarse con el técnico responsable de realizar el
                            estudio.</div>
                        </li>
                        <li>¿Es peligroso o produce dolor realizarse una resonancia magnética?
                        (respuesta desplegable)
                            <div>La resonancia magnética es un estudio totalmente indoloro. Simplemente el
                            paciente debe permanecer inmóvil dentro del equipamiento, en forma
                            horizontal.
                            Los campos magnéticos no producen ningún daño conocido a los tejidos al no
                            tratarse de radiaciones ionizantes tipo rayos X, así que no emite ningún tipo de
                            radiación peligrosa, ni surgen complicaciones posteriores.</div>
                        </li>
                        <li>¿El estudio es ruidoso? ( ​ respuesta desplegable)
                            <div>La máquina emite un ruido fuerte como de martilleo o golpes en algunas fases
                            que es totalmente normal, por lo que el paciente no debe asustarse o
                            preocuparse por ello.
                            </div>
                        </li>
                        <li>¿Qué pasa si soy claustrofóbico? ​(respuesta desplegable)
                            <div>Al tener el resonador magnético forma de túnel, cualquier persona puede
                            experimentar cierta claustrofobia. Si sos propenso a sufrir este problema,
                            previo al estudio el médico podría administrarte un tranquilizante.</div>
                        </li>
                        <li>¿Qué sucede si tengo piercing, prótesis, tatuaje, ortodoncia o
                            marcapasos? ¿Qué metales son peligrosos o están contraindicados?
                            (respuesta desplegable)
                            <div>Los ​artículos peligrosos para la salud o que ​podrían causar otros problemas
                                durante una resonancia magnética son:
                                <ul>
                                    <li>Marcapasos cardíaco o desfibrilador implantable</li>
                                    <li>Sujetador metálico puesto para evitar el sangrado en un
                                    aneurisma intracraneal</li>
                                    <li>Catéter con componentes metálicos que pueden tener el
                                    riesgo de producir quemaduras</li>
                                    <li>Bomba para medicamentos (por ejemplo, las utilizadas para
                                    administrar insulina o analgésicos)</li>
                                    <li>Implante coclear (oído interno)</li>
                                </ul>
                                Los objetos que ​podrían interferir un estudio de ​resonancia magnética ​y, por
                                lo tanto, están ​contraindicados​ son:
                                <ul>
                                    <li>Presencia de grapas quirúrgicas.</li>
                                    <li>Prótesis ortopédicas, de oído, de globo ocular, dental,
                                    vascular, biliar, cardiaca.</li>
                                    <li>Suturas o catéteres metálicos.</li>
                                    <li>Presencia de dispositivo intrauterino o diafragma.</li>
                                    <li>Existencia en el interior del cuerpo de trozos de balas,
                                    perdigón, metralla, u algún tipo de esquirla metálica ocular y
                                    orbitaria.</li>
                                    <li>Válvulas de derivación.</li>
                                    <li>Filtros vasculares.</li>
                                    <li>Alambres de embolización.</li>
                                    <li>Presencia de neuroestimulador.</li>
                                    <li>Existencia de tatuaje.</li>
                                    <li>Presencia de estimulador de crecimiento óseo.</li>
                                    <li>Los ​empastes dentales metálicos y los ​aparatos de ortodoncia en general no
                                    son afectados por el campo magnético, pero sí pueden distorsionar las
                                    imágenes de la cara o el cerebro.</li>
                                </ul>
                            </div>
                        </li>
                        <li>¿Las embarazadas pueden realizarse resonancias? ​(respuesta
                            desplegable)
                            <div>Las embarazadas o las mujeres que sospechen estar embarazadas deberán
                                informarlo a Advance al solicitar el turno, o al médico durante el
                                procedimiento de verificación que se lleva a cabo antes de comenzar el
                                estudio. En general, no hay riesgos conocidos de la resonancia magnética en
                                mujeres embarazadas. Sin embargo, en pacientes embarazadas, este tipo de
                                estudio se reserva sólo para problemas muy serios o anomalías sospechadas.
                                En todo caso, es muy probable que la resonancia magnética sea menos
                                peligrosa para el feto que los rayos X o la tomografía computada (TC).</div>
                        </li>
                        <li>¿Las mujeres en período de lactancia pueden realizarse resonancias?
                            (respuesta desplegable)
                            <div>Las mujeres que se encuentren en período de lactancia -es decir, que estén
                                amamantando- deben informarlo a Advance al solicitar el turno. Esto es
                                particularmente importante si es necesaria la inyección de un material de
                                contraste para realizar la resonancia. En ese caso, una opción es sacarse la
                                leche antes del estudio, que puede ser utilizada para alimentar al bebé hasta
                                que se haya eliminado el medio de contraste del cuerpo. Generalmente, eso
                                demora unas 24 horas. El médico proporcionará a cada paciente información
                                adicional con respecto a este tema.
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default EstudioResonancia;