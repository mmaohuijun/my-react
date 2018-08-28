import React from 'react';
import './ps-login-mask.less';

import PsLoginModal from '../ps-login-modal/PsLoginModal';

class PsLoginMask extends React.Component{
    constructor(props){
        super(props);
        this.saveLogin = this.saveLogin.bind(this);
    }

    saveLogin(ifShowLogin){
        this.props.saveLogin(ifShowLogin);
    }


    getStyle(){
        let showLoginStyle = {};
        if (this.props.ifShowLogin){
            showLoginStyle = {display: 'block'}
        }
        return showLoginStyle;
    }
    render(){
        const { ifShowLogin } = this.props;

        return(
            <div className={'login-mask'} style={this.getStyle()}>
                <PsLoginModal saveLogin={this.saveLogin} />
            </div>
        )
    }
}

export default PsLoginMask;
