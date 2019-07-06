import React from 'react';
import { Link } from 'react-router-dom';

class EstudioTomografia extends React.Component {
    render(){
        return(
            <div className='estudio-tomografia'>
                <div className='wrapper-central'>

                    <h1>TOMOGRAFÍA COMPUTADA</h1>

                    <p>La Tomografía Computada Multislice es un procedimiento no invasivo que
                    utiliza rayos X para obtener imágenes de distintos tipos de tejidos.</p>
                    <p>Es indoloro, rápido y sencillo, y puede ser utilizado como guía para biopsias,
                    marcaciones para radioterapia, bloqueos radiculares y otros procedimientos.</p>
                    <p>Las ventajas son el tiempo que dura la realización de los estudios, la mejora
                    de la caracterización de estructuras vasculares, y la posibilidad de las
                    reconstrucciones en 3D y 2D. Además, permite realizar colonoscopía,
                    angiografía coronaria no invasiva, broncoscopía e imágenes odontológicas.</p>

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
                    <h2>Listado de estudios</h2>
                    <ul>
                        <li>TC comunes ( ​ listado desplegable)</li>
                        <li>TC con contraste ​(listado desplegable)</li>
                        <li>TC especiales ​(listado desplegable)</li>
                        <li>TC comunes especiales de cardiología ​(listado desplegable)</li>
                        <li>Intervenciones guiadas por TC ( ​ listado desplegable)</li>
                    </ul>

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
            </div>
        )
    }
}

export default EstudioTomografia;