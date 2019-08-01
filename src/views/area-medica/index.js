import React from 'react';
import './styles.scss';

class AreaMedica extends React.Component {
    render(){
        return(
            <section id='area-medica'>
                <h1>ÁREA MEDICA</h1>
                <div className='wrapper-central'>

                    <div className='resultados'>
                        <h2>Resultados online</h2>
                            <p className='accede'>
                            <strong>Accedé a los estudios que indicaste a tus pacientes de manera rápida, exclusiva y segura.</strong></p>
                            
                            <a href='http://portal.diagnosticoadvance.com.ar' target='_blank' className='btn'>VER ESTUDIOS</a>
                    </div>
                    
                    <div className='imagen'>
                        <img src='/images/slider/equipo.jpg' alt='frente' />
                    </div>

                    <div className='prof'>
                    <h2>Actividades de formación profesional</h2>
                    <h3>Somos parte de la misma solución</h3>

                    <p className='subtitulo'>
                    Creemos que la capacitación continua y el diálogo permanente con la
                    comunidad médica es clave para brindar respuestas integrales a
                    nuestros pacientes y contribuir al desarrollo del área de la salud en
                    nuestra región.
                    Por eso creamos un espacio dedicado a la formación, al debate de
                    casos y el intercambio de experiencias.
                    </p>

                    </div>
                    
                    <div className='caja'>
                    <p>
                    Estamos construyendo nuestra agenda de capacitaciones y ateneos. Para conocer
                    próximos eventos, hacer sugerencias o recibir novedades, escribinos a
                    info​@diagnosticoadvance.com​ o dejanos tus datos.
                    </p>

                    <form>
                        <label for='nombre'>NOMBRE:</label><input name='nombre' type='text' value=''/>
                        <label for='profesion'>PROFESIÓN/ESPECIALIDAD:</label><input name='profesion' type='text' value='' />
                        <label for='institucion'>INSTITUCIÓN:</label><input name='institucion' type='text' value='' />
                        <label for='temas'>TEMÁTICAS DE INTERÉS:</label><input name='temas' type='text' value='' />
                        <label for='email'>EMAIL:</label><input name='email' type='text' value='' />
                        <label for='telefono'>TELÉFONO:</label><input name='telefono' type='text' value=''/>
                        <div className='clearfix'></div>
                    </form>
                    <div className='clearfix'></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AreaMedica;