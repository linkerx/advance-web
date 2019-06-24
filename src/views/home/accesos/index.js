import React from 'react';
import './styles.scss';

class HomeAccesos extends React.Component {
    render(){
        return (
            <section id='home-accesos'>
                <ul>
                    <li>
                        <h2>Tomografías Computadas</h2>
                        <img />
                        <span>Texto descripctivo</span>
                    </li>
                    <li>
                        <h2>Resonancias Magnéticas</h2>
                        <img />
                        <span>Texto descripctivo</span>
                    </li>
                    <li>
                        <h2>Ecografías</h2>
                        <img />
                        <span>Texto descripctivo</span>
                    </li>
                </ul>
            </section>
        )
    }
}

export default HomeAccesos;