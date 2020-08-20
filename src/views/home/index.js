import React from 'react';
import HomeInicio from './inicio';
import HomeAccesos from './accesos';

class Home extends React.Component {
    render(){
        return (
            <section id='home'>
                <HomeInicio />
                <HomeAccesos />
            </section>
        )
    }
}

export default Home;