import React from 'react';
import './styles.scss';

class AreaMedica extends React.Component {
    render(){
        return(
            <section id='area-medica'>
                <h1>ÁREA MEDICA</h1>
                <div className='wrapper-central'>
                    Actividades de formación profesional
                    Somos parte de la misma solución

                    Creemos que la capacitación continua y el diálogo permanente con la
                    comunidad médica es clave para brindar respuestas integrales a
                    nuestros pacientes y contribuir al desarrollo del área de la salud en

                    nuestra región.

                    Por eso creamos un espacio dedicado a la formación, al debate de

                    casos y el intercambio de experiencias.

                    FOTO MÉDICOS HABLANDO (LA DEL SLIDE 1) A LO ANCHO DE LA PÁGINA

                    El siguiente texto y formulario, ponerlo en una caja con fondo gris claro, del mismo
                    ancho que la foto de arriba:
                    Estamos construyendo nuestra agenda de capacitaciones y ateneos. Para conocer
                    próximos eventos, hacer sugerencias o recibir novedades, escribinos a
                    secretaria​@diagnosticoadvance.com​ o dejanos tus datos.
                    Formulario (campos a completar):
                    Nombre:
                    Profesión/Especialidad:
                    Institución:
                    Tema que te gustaría tratar:
                    Mail:
                    Whatsapp:
                    Enviar ​ ​(botón de envío a secretaria@diagnosticoadvance.com)
                </div>
            </section>
        )
    }
}

export default AreaMedica;