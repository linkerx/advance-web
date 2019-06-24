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
                    <span>info@diagnosticoadvance.com​</span>
                </div>
                <div className='telefono'>
                    <i className="fas fa-phone"></i>
                    <span>+54 02920 XXXXXX</span>
                </div>
            </section>
        )
    }
}

export default HomeTopBar;