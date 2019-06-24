import React from 'react';
import HomeTopBar from './topbar';
import HomeMenu from './menu';
import HomeSlider from './slider';
import './styles.scss';

class HomeInicio extends React.Component {
    render(){
        return (
            <section id='home-inicio'>
                <HomeTopBar />
                <HomeMenu />
                <HomeSlider />
            </section>
        )
    }
}

export default HomeInicio;