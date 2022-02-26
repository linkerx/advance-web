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
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i><h3>Sede Principal </h3><span>Alem 1360, Viedma, Río Negro</span></li>
                                <li><i className="fas fa-map-marker-alt"></i><h3>Sede Centro </h3><span>25 de Mayo 174, Viedma, Río Negro</span></li>
                            </ul>
                        </div>
                        <div className='email'>
                            <i className="fas fa-envelope"></i>
                            <span><a href='mailto:info@diagnosticoadvance.com​.ar'>info@diagnosticoadvance.com.ar</a></span>
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
                            <ul>
                                <li>
                                    <h3>Sede Principal</h3>
                                    <span>
                                    Lunes a viernes - 6:00 hs a 22:00<br/>
                                    Sábados - 6:00 hs a 13:00 hs
                                    </span>
                                </li>
                                <li>
                                    <h3>Sede Centro</h3>
                                    <span>
                                    Lunes a viernes - 6:00 hs a 22:00<br/>
                                    Sábados - 6:00 hs a 13:00 hs
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>             
            </section>
        )
    }
}

export default Footer;