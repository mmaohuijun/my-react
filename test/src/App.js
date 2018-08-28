import React from 'react';
import ViewPage from './view/ViewPage';
import PsLoginMask from './component/ps-login-mask/PsLoginMask'
import PsConfigMask from './component/ps-config-mask/PsConfigMask';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            ifShowLogin: false,
            ifShowConfig: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.saveLogin = this.saveLogin.bind(this);
        this.showConfigModal = this.showConfigModal.bind(this);
        this.saveConfig = this.saveConfig.bind(this);
    }

    saveLogin(ifShowLogin){
        this.setState({ ifShowLogin: ifShowLogin });
    }

    handleLogin(ifShowLogin){
        console.log('ifShowLogin', ifShowLogin);
        this.setState({ ifShowLogin: ifShowLogin });
    }

    showConfigModal(ifShowConfig){
        console.log('ifShowConfig', ifShowConfig);
        this.setState({ ifShowConfig: ifShowConfig });
    }

    saveConfig(ifShowConfig){
        this.setState({ ifShowConfig: ifShowConfig })
    }


    render(){
        const { ifShowLogin, ifShowConfig } = this.state;
        return(
            <div>
                <PsLoginMask ifShowLogin={ifShowLogin} saveLogin={this.saveLogin} />
                <PsConfigMask ifShowConfig={ifShowConfig} saveConfig={this.saveConfig} />
                <ViewPage handleLogin={this.handleLogin} showConfigModal={this.showConfigModal} />
            </div>

        )
    }
}

export default App;
