import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

class FullMenu extends React.Component {
    render(){
        
        var menuClass = 'closed';
        if(typeof(this.props.menuOpened) !== 'undefined'){
            if(this.props.menuOpened){
                menuClass = 'open';
            }
        }

        return(
            <div id='full-menu' className={menuClass}>
                <div className='close-trigger' onClick={() => this.props.closeMenu()}>
                    <i className="fas fa-times"></i>
                </div>
                <div className='logo'>
                    <NavLink to='/'><img src='/images/logo.png' alt="logo-advance" /></NavLink>
                </div>
                <div className='menu'>
                    <ul>
                        <li onClick={() => this.props.closeMenu()}><NavLink to='/institucional'>INSTITUCIONAL</NavLink></li>
                        <li onClick={() => this.props.closeMenu()}><NavLink to='/estudios'>ESTUDIOS</NavLink></li>
                        <li onClick={() => this.props.closeMenu()}><NavLink to='/pacientes'>PACIENTES</NavLink></li>
                        <li onClick={() => this.props.closeMenu()}><NavLink to='/equipamiento'>EQUIPAMIENTO</NavLink></li>
                        <li onClick={() => this.props.closeMenu()}><NavLink to='/area-medica'>ÁREA MÉDICA</NavLink></li>
                        <li onClick={() => this.props.closeMenu()}><NavLink to='/contacto'>CONTACTO</NavLink></li>
                    </ul>
                </div>
                <div className='estudios'>
                    <a href='https://portal.diagnosticoadvance.com.ar' target='_blank'>VER MIS ESTUDIOS</a>
                </div>
            </div>
        )
    }
}

export default FullMenu;