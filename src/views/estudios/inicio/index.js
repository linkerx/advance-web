import React from 'react';
import { Link } from 'react-router-dom';

class EstudiosInicio extends React.Component {
    render(){
        return(
            <section id='estudios'>
                <h1>Listado de Estudios</h1>
                <ul>
                    <li>
                        <Link to='/estudios/tomografia'>
                            <h2>Tomografías Computadas</h2>
                            <img src='/images/estudios/tomografo.jpg' alt='Tomografías Computdas' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/estudios/resonancia'>
                            <h2>Resonancias Magnéticas</h2>
                            <img src='/images/estudios/resonancia.jpg' alt='Resonancias Magnéticas' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/estudios/ecografia'>
                            <h2>Ecografías</h2>
                            <img src='/images/estudios/ecografia.png' alt='Ecografías'/>
                        </Link>
                    </li>
                </ul>
            </section>
        )
    }
}

export default EstudiosInicio;