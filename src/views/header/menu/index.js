import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

class HomeMenu extends React.Component {
    render(){
        return (
            <section id='home-menu'>
                <div className='logo'>
                    <NavLink to='/'><img src='/images/logo_rosa.png' className="logo" alt="logo-advance" /></NavLink>
                </div>
                <div className='menu'>
                    <ul>
                        <li><NavLink to='/institucional'>INSTITUCIONAL</NavLink></li>
                        <li><NavLink to='/estudios'>ESTUDIOS</NavLink></li>
                        <li><NavLink to='/pacientes'>PACIENTES</NavLink></li>
                        <li><NavLink to='/equipamiento'>EQUIPAMIENTO</NavLink></li>
                        <li><NavLink to='/area-medica'>ÁREA MÉDICA</NavLink></li>
                        <li><NavLink to='/obras-sociales'>OBRAS SOCIALES</NavLink></li>
                        <li><NavLink to='/contacto'>CONTACTO</NavLink></li>
                    </ul>
                </div>
                <div className='estudios'>
                    <a href='https://portal.diagnosticoadvance.com.ar/portal/WebLogin.aspx?ReturnUrl=/portal/default.aspx' target='_blank'>VER MIS ESTUDIOS</a>
                </div>
                <div className='menu-trigger'>
                    <i className="fas fa-bars" onClick={() => this.props.openMenu()}></i>
                </div>
                <div className='covid'>
                    <NavLink to='/covid-19'>COVID-19 | INFORMACIÓN IMPORTANTE | CONOCÉ NUESTRO PROTOCOLO DE TRABAJO</NavLink>
                </div>
            </section>
        )
    }
}

export default HomeMenu;