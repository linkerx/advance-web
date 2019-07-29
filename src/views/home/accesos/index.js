import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class HomeAccesos extends React.Component {
    render(){
        return (
            <section id='home-accesos'>
                <ul>
                    <li className='tomografia'>
                        <Link to='/estudios/tomografia'>
                            <h2>Tomografía Computada</h2>
                            <div className='linea'></div>
                            <img src='/images/comp/8304.jpg' alt='Tomografías Computdas' />
                        </Link>
                    </li>
                    <li className='resonancia'>
                        <Link to='/estudios/resonancia'>
                            <h2>Resonancia Magnética</h2>
                            <div className='linea'></div>
                            <img src='/images/equipos/resonador.jpg' alt='Resonancias Magnéticas' />
                        </Link>
                    </li>
                    <li className='ecografia'>
                        <Link to='/estudios/ecografia'>
                            <h2>Ecografía</h2>
                            <div className='linea'></div>
                            <img src='/images/estudios/ecografia.png' alt='Ecografías'/>
                        </Link>
                    </li>
                </ul>
            </section>
        )
    }
}

export default HomeAccesos;