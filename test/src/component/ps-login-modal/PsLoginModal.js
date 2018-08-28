import React from 'react';
import './ps-login-modal.less';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PsInput from '../ps-input/PsInput';
import SubmitButton from '../submit-button/SubmitButton';

class PsLoginModal extends React.Component{
    constructor(props){
        super(props);
        this.saveLogin = this.saveLogin.bind(this);
    }

    saveLogin(){
        this.props.saveLogin(false);
    }

    render(){
        return(
            <div className={'login-modal'}>
                <div className={'login-header'}>User Login</div>
                <div className={'login-body'}>
                    <PsInput inputPrompt={'EMPLOYEE ID'} inputIcon={'user'} />
                    <PsInput inputPrompt={'PASSWORD'} inputIcon={'unlock-alt'} />
                    <SubmitButton onClick={this.saveLogin} />
                </div>
                <i className={'close-btn'} onClick={this.saveLogin}>
                    <FontAwesomeIcon icon={'times'} />
                </i>
            </div>
        )
    }
}

export default PsLoginModal;
