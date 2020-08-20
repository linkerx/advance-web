import React from 'react';
import WpSlider from './slider';
import './styles.scss';

class HomeSlider extends React.Component {
    render() {
        return (
            <section id='home-slider'>
                <WpSlider />
            </section>
        )
    }
}

export default HomeSlider;