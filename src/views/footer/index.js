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
                        <div className='linea'></div>
                        <div className='horarios'>
                            <span>
                                <h3>Horario de atención</h3>
                                Lunes a viernes - 08.00 a 20.00
                            </span>
                        </div>
                    </div>
                    <div className='cen'>
                        <NavLink to='/'><img src='/images/logo_sello_mini.png' className="logo" alt="logo-advance" /></NavLink>
                    </div>
                    <div className='der'>
                    <ul>
                        <li><NavLink to='/institucional'>Institucional</NavLink></li>
                        <li><NavLink to='/estudios'>Estudios</NavLink></li>
                        <li><NavLink to='/pacientes'>Pacientes</NavLink></li>
                        <li><NavLink to='/equipos'>Equipos</NavLink></li>
                        <li><NavLink to='/area-medica'>Área médica</NavLink></li>
                        <li><NavLink to='/contacto'>Contacto</NavLink></li>
                        <li className='ver'><NavLink to='/ver'>Ver mis estudios</NavLink></li>
                    </ul>
                    </div>
                </div>             
            </section>
        )
    }
}

export default Footer;