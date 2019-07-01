import React from 'react';
import './styles.scss';

class HomeSlider extends React.Component {
    render() {
        return (
            <section id='home-slider'>
                <div className='slider-container'>
                    <div className='image'></div>
                    <div className='texto'>
                        <h2>Tu salud en buenas manos</h2>
                        <p>
                            Trabajamos con la mejor tecnología y un equipo médico
                            especializado en diagnóstico por imágenes para brindarte la atención que buscás.
                        </p>
                        
                        <a className='btn'>Conocenos</a>
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeSlider;