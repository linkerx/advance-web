import React from 'react';
import HomeInicio from './inicio';
import HomeAccesos from './accesos';
import Footer from './footer';

class Home extends React.Component {
    render(){
        return (
            <section id='home'>
                <HomeInicio />
                <HomeAccesos />
                <Footer />
            </section>
        )
    }
}

export default Home;