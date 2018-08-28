import React from 'react';
import './header.less';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.showLoginModal = this.showLoginModal.bind(this);
        this.showConfigModal = this.showConfigModal.bind(this);
    }

    showLoginModal(){
        this.props.handleShowLogin(true);
    }

    showConfigModal(){
        this.props.showConfigModal(true);
    }

    render(){
        return(
            <header>
                <div className='logo-img'>
                    <img src="../../42Q_light.png" alt="42Q"/>
                </div>
                <div className={'header-icon-wrapper'}>
                    <span>| </span>
                    <i className={'header-icon'} onClick={this.showLoginModal}>
                        <FontAwesomeIcon icon="user" />
                    </i>
                    <i className={'header-icon'} onClick={this.showConfigModal}>
                        <FontAwesomeIcon icon="cog" />
                    </i>
                </div>
            </header>
        )
    }
}

export default Header;
