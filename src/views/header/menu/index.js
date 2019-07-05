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
                <ul>
                    <li><NavLink to='/institucional'>Institucional</NavLink></li>
                    <li><NavLink to='/estudios'>Estudios</NavLink></li>
                    <li><NavLink to='/pacientes'>Pacientes</NavLink></li>
                    <li><NavLink to='/equipos'>Equipos</NavLink></li>
                    <li><NavLink to='/area-medica'>Área médica</NavLink></li>
                </ul>
            </section>
        )
    }
}

export default HomeMenu;