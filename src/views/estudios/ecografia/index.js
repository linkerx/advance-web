import React from 'react';
import { Link } from 'react-router-dom';

class EstudioEcografia extends React.Component {
    render(){
        return(
            <div className='estudio-ecografia'>
                <div className='wrapper-central'>
                    <h1>ECOGRAFÍA</h1>
                    <p>
                    La ecografía es un método de diagnóstico que utiliza ondas de ultrasonidos
                    para obtener imágenes de los órganos internos del cuerpo.
                    Su técnica es sencilla, rápida, segura e indolora.
                    </p>
                    <h2>Antes del estudio</h2>
                    <ul>
                        <li>El día de la realización de cualquier estudio, deberás presentarte 15
                        minutos antes del turno en la recepción de Advance.</li>
                        <li>Traer los últimos estudios previos relacionados a la práctica.</li>
                        <li>Recordá que este tiempo ha sido reservado para vos. Si no es posible
                        acudir en día y hora convenidos, por favor avisar anticipadamente.</li>
                        <li>Ante cualquier duda o inquietud, contactanos​ (link a “Contacto”).</li>
                    </ul>
                    <h2>Tipo de exámenes</h2>
                    <ul>
                        <li>Generales​ (listado desplegable)</li>
                        <li>Ecoddopler ​(listado desplegable)</li>
                        <li>Especiales ​(listado desplegable)</li>
                        <li>Intervencionismo guiado por ecografía ​(listado desplegable)</li>
                    </ul>
                    <h2>Preguntas frecuentes</h2>
                    <ul>
                        <li>¿Quién debe interpretar una ecografía? ( ​ respuesta desplegable)</li>
                        <li>¿Qué es la ecografía Ecoddopler? ¿Qué permite diagnosticar?
                            (respuesta desplegable)
                            <div>Es un tipo especial de ecografía que permite examinar el estado del
                                corazón, las arterias y de las venas. Con ella se evalúa: función
                                cardíaca, velocidad de flujo sanguíneo, calibre, permeabilidad,
                                obstrucción, etc. El método de realización es el mismo que el de la
                                ecografía convencional.</div>
                        </li>
                        <li>¿Qué diferencia hay entre una ecografía 2D, 3D, 4D y 5D?​ ​(respuesta
                            desplegable)</li>
                        <li>¿En qué mes del embarazo debe realizarse una ecografía? ¿Qué
                            permite diagnosticar?</li>
                        <li>¿A partir de qué mes de embarazo se puede identificar el sexo del
                            bebé a través de una ecografía? ( ​ respuesta desplegable)</li>
                        <li>¿En qué mes se pueden detectar patologías en el bebé? ​(respuesta
                            desplegable)</li>
                        <li>¿En qué mes se pueden detectar patologías en el bebé? ​(respuesta
                            desplegable)</li>
                        <li>¿Cómo se debe preparar a la madre para una ecografía? ​(respuesta
                            desplegable)</li>
                        <li>¿En qué casos puede fallar una ecografía? ( ​ respuesta desplegable)</li>
                   </ul>
                </div>
            </div>
        )
    }
}

export default EstudioEcografia;