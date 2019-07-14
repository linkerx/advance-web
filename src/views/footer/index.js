import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

class Footer extends React.Component {
    render(){
        return (
            <section id='footer'>
                <div className='wrapper-central'>
                    <div className='izq'>
                        <div className='ubicacion'>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Alem 1360, Viedma, Río Negro</span>
                        </div>
                        <div className='email'>
                            <i className="fas fa-envelope"></i>
                            <span><a href='mailto:info@diagnosticoadvance.com​'>info@diagnosticoadvance.com</a></span>
                        </div>
                        <div className='telefono'>
                            <i className="fas fa-phone"></i>
                            <span><a href='tel:+54 02920 429957'>+54 02920 429957</a></span>
                        </div>
                    </div>
                    <div className='cen'>
                        <NavLink to='/'><img src='/images/logo_sello_mini.png' className="logo" alt="logo-advance" /></NavLink>
                    </div>
                    <div className='der'>
                        <div className='horarios'>
                            <h3>Horario de atención</h3>
                            <div className='linea'></div>
                            <span>
                                Lunes a viernes - 08.00 a 20.00<br/>
                                Sábado - Cerrado<br/>
                                Domingo - Cerrado<br/>
                            </span>
                        </div>
                    </div>
                </div>             
            </section>
        )
    }
}

export default Footer;