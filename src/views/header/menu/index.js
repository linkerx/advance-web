import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

class HomeMenu extends React.Component {
    render(){
        return (
            <section id='home-menu'>
                <div className='logo'>
                    <NavLink to='/'><img src='/images/logo.png' className="logo" alt="logo-advance" /></NavLink>
                </div>
                <div className='menu'>
                    <ul>
                        <li><NavLink to='/institucional'>INSTITUCIONAL</NavLink></li>
                        <li><NavLink to='/estudios'>ESTUDIOS</NavLink></li>
                        <li><NavLink to='/pacientes'>PACIENTES</NavLink></li>
                        <li><NavLink to='/equipos'>EQUIPOS</NavLink></li>
                        <li><NavLink to='/area-medica'>ÁREA MÉDICA</NavLink></li>
                        <li><NavLink to='/area-medica'>CONTACTO</NavLink></li>
                    </ul>
                </div>
                <div className='estudios'>
                    VER MIS ESTUDIOS
                </div>
                <div className='menu-trigger'>
                    <i className="fas fa-bars"></i>
                </div>
            </section>
        )
    }
}

export default HomeMenu;