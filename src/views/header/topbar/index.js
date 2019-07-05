import React from 'react';
import './styles.scss';

class HomeTopBar extends React.Component {
    render() {
        return(
            <section id='home-top-bar'>
                <div className='ubicacion'>
                    <i className="fas fa-map-signs"></i>
                    <span>Alem 1360, Viedma, Río Negro</span>
                </div>
                <div className='email'>
                    <i className="fas fa-envelope"></i>
                    <span><a href='mailto:info@diagnosticoadvance.com​'>info@diagnosticoadvance.com</a></span>
                </div>
                <div className='telefono'>
                    <i className="fas fa-phone"></i>
                    <span><a href='tel:+54 02920 XXXXXX'>+54 02920 XXXXXX</a></span>
                </div>
            </section>
        )
    }
}

export default HomeTopBar;