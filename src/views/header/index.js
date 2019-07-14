import React from 'react';
import TopBar from './topbar';
import Menu from './menu';
import './styles.scss';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fixed: false
        }
        this.checkFixed = this.checkFixed.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkFixed);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkFixed);  
    }

    checkFixed() {
        if(window.scrollY > 60){
            this.setState({
                fixed: true
            });    
        } else {
            this.setState({
                fixed: false
            })
        }        
    }

    render(){

        var headerClass = 'normal';
        if(this.state.fixed) {
            headerClass = 'fixed';
        }

        return(
            <section id='header' className={headerClass}>
                <TopBar />
                <Menu openMenu={this.props.openMenu}/>
            </section>
       )
    }
}

export default Header;