import React from 'react';
import './styles.scss';

class FlechaArriba extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            top: true
        }
        this.checkTop = this.checkTop.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkTop);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkTop);  
    }

    checkTop() {
        if(window.scrollY === 0){
            this.setState({
                top: true
            });    
        } else {
            this.setState({
                top: false
            })
        }        
    }
        
    render(){

        var flechaClass = 'top';
        if(!this.state.top) {
            flechaClass = 'notop';
        }

        return(
            <div id='flecha-arriba' className={flechaClass}>
                <a href="#" className="subir"><span className="fas fa-arrow-up"></span></a>
            </div>
        )
    }
}

export default FlechaArriba;