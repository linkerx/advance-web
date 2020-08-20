import React from 'react';
import HomeSlider from './slider';
import './styles.scss';

class HomeInicio extends React.Component {
    render(){
        return (
            <section id='home-inicio'>
                <HomeSlider />
            </section>
        )
    }
}

export default HomeInicio;