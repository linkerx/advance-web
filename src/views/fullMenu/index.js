import React from 'react';
import './styles.scss';

class FullMenu extends React.Component {
    render(){
        return(
            <div id='full-menu'>
                <div className='close-trigger' onClick={() => this.props.closeMenu()}>CLOSE</div>
            </div>
        )
    }
}

export default FullMenu;