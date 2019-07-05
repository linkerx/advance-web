import React from 'react';
import TopBar from './topbar';
import Menu from './menu';

class Header extends React.Component {
    render(){
        return(
            <section id='header'>
                <TopBar />
                <Menu />
            </section>
       )
    }
}

export default Header;