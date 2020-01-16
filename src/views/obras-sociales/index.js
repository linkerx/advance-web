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
                        <li>ACA SALUD</li>
                        <li>FEDERADA SALUD</li>
                        <li>HORIZONTE</li>
                        <li>IPROSS</li>
                        <li>LA SEGUNDA</li>
                        <li>OSAM</li>
                        <li>OSDOP</li>
                        <li>OSPECON</li>
                        <li>OSPIA</li>
                        <li>OSPM</li>
                        <li>OSUTHGRA</li>
                        <li>PREVENCION ART</li>
                        <li>SANCOR SALUD</li>
                    </ul>

                </div>
            </section>
        )
    }
}

export default ObrasSociales;