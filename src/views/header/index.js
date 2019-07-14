import React from 'react';
import TopBar from './topbar';
import Menu from './menu';
import './styles.scss';

class Header extends React.Component {
    render(){
        return(
            <section id='header'>
                <TopBar />
                <Menu openMenu={this.props.openMenu}/>
            </section>
       )
    }
}

export default Header;