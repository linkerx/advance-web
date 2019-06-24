import React from 'react';
import './styles.scss';

class HomeMenu extends React.Component {
    render(){
        return (
            <section id='home-menu'>
                <ul>
                    <li>Institucional</li>
                    <li>Estudios</li>
                    <li>Pacientes</li>
                    <li>Equipos</li>
                    <li>Área médica</li>
                </ul>
            </section>
        )
    }
}

export default HomeMenu;