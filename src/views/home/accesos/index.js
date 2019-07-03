import React from 'react';
import './styles.scss';

class HomeAccesos extends React.Component {
    render(){
        return (
            <section id='home-accesos'>
                <ul>
                    <li>
                        <h2>Tomografías Computadas</h2>
                        <img src='/images/estudios/tomografo.jpg' alt='Tomografías Computdas' />
                    </li>
                    <li>
                        <h2>Resonancias Magnéticas</h2>
                        <img src='/images/estudios/resonancia.jpg' alt='Resonancias Magnéticas' />
                    </li>
                    <li>
                        <h2>Ecografías</h2>
                        <img src='/images/estudios/ecografia.png' alt='Ecografías'/>
                    </li>
                </ul>
            </section>
        )
    }
}

export default HomeAccesos;