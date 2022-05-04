import React from 'react';
import './styles.scss';

class ObrasSociales extends React.Component {
    render(){
        return(
            <section id='obras-sociales'>
                <h1>OBRAS SOCIALES</h1>
                <div className='wrapper-central'>
                    <p className='subtitulo'>Trabajamos con las siguientes obras sociales, prepagas y mutuales. Estamos ampliando nuestra cartilla. Si tenés dudas, contactanos.</p>
                    <ul>
                        <li><img src='/images/osoc/avalian.jpeg' /></li>
                        <li><img src='/images/osoc/federadasalud.png' /></li>
                        <li><img src='/images/osoc/horizonteseguros.png' /></li>
                        <li><img src='/images/osoc/ipross.png' /></li>
                        <li><img src='/images/osoc/lasegunda.png' /></li>
                        <li><img src='/images/osoc/osam.png' /></li>
                        <li><img src='/images/osoc/osdop.png' /></li>
                        <li><img src='/images/osoc/ospecon.png' /></li>
                        <li><img src='/images/osoc/ospia.png' /></li>
                        <li><img src='/images/osoc/ospm.jpg' /></li>
                        <li><img src='/images/osoc/osuthgra.png' /></li>
                        <li><img src='/images/osoc/prevart.png' /></li>
                        <li><img src='/images/osoc/sancor.png' /></li>
                        <li><img src='/images/osoc/swiss.png' /></li>
                    </ul>

                </div>
            </section>
        )
    }
}

export default ObrasSociales;