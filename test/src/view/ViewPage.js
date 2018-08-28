import React from 'react';
import'./view-page.less';

import Header from '../component/header/Header';
import InputComponent from '../component/input-component/InputComponent';
import PsDroppanel from '../component/ps-droppanel/PsDroppanel';
import SerialCommandList from '../component/serial-command-list/SerialCommandList';
import SubmitButton from '../component/submit-button/SubmitButton';
import PsViewRight from '../component/ps-view-right/PsViewRight';
import Footer from '../component/footer/Footer';

import PsLoginModal from '../component/ps-login-modal/PsLoginModal';
import PsConfigModal from '../component/ps-config-modal/PsConfigModal';
import PsRadioInput from '../component/ps-radio-input/PsRadioInput';

import '../fontAwesome'

class ViewPage extends React.Component{
    constructor(props) {
        super(props);
        this.handleShowLogin = this.handleShowLogin.bind(this);
        this.showConfigModal = this.showConfigModal.bind(this);
    }

    handleShowLogin(ifShowLogin){
        this.props.handleLogin(ifShowLogin);
    }

    showConfigModal(ifShowConfig){
        this.props.showConfigModal(ifShowConfig);
        console.log('showConfig', ifShowConfig);
    }

    render(){
        const commandList = [
            [{ id: 0, name: 'Instruction S/N' }],
            [{ id: 1, name: 'Instruction Added?' }],
            [{ id: 2, name: 'Lid S/N' }],
            [
                { id: 3, name: 'Hello' },
                { id: 4, name: 'Hi' }
            ]
        ];
        return(
            <div id={'container'}>
                <Header
                    handleShowLogin={this.handleShowLogin}
                    showConfigModal={this.showConfigModal}
                />
                <main>
                    {/*<PsRadioInput />*/}
                    <InputComponent />
                    <div className={'content-wrapper'}>
                        <div className={'content-left-col1'}>
                            <div className={'content-left-wrapper'}>
                                <PsDroppanel />
                                <div className={'content-list-wrapper'}>
                                    {
                                        commandList.map((command, index) => (
                                            <SerialCommandList command={command} key={index} />
                                        ))
                                    }
                                </div>
                                <div>
                                    <SubmitButton />
                                </div>

                            </div>

                        </div>
                        <div className={'content-right-col2'}>
                            <div className={'content-right-wrapper'}>
                                <PsViewRight />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default ViewPage;


