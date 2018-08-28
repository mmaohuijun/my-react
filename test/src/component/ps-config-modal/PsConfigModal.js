import React from 'react';
import './ps-config-modal.less';

import PsInput from '../ps-input/PsInput';
import SubmitButton from '../submit-button/SubmitButton';
import PsRadioInput from '../ps-radio-input/PsRadioInput';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class PsConfigModal extends React.Component{
    constructor(props){
        super(props);
        this.saveConfig = this.saveConfig.bind(this);
    }

    saveConfig(){
        this.props.saveConfig(false);
    }

    render(){
        return(
            <div className={'config-modal'} id={'config-modal'}>
                <div className={'config-header'}>
                    Configuration
                </div>
                <div className={'config-body'}>
                    <div className={'config-left'}>
                        <div className={'config-left-col'}>
                            <PsInput inputPrompt={'PORTAL HOST'} inputIcon={'desktop'} />
                            <PsInput inputPrompt={'PLANT CODE'} inputIcon={'building'} />
                            <PsInput inputPrompt={'Portal Host'} inputIcon={'user'} />
                            {/*<PsRadioInput></PsRadioInput>*/}
                            <PsInput inputPrompt={'Portal Host'} inputIcon={'user'} />
                            <PsInput inputPrompt={'Portal Host'} inputIcon={'user'} />
                            <PsInput inputPrompt={'Portal Host'} inputIcon={'user'} />
                        </div>
                    </div>
                    <div className={'config-right'}>
                        <div className={'config-right-col'}>
                            <PsInput inputPrompt={'Portal Host'} inputIcon={'user'} />
                            <PsInput inputPrompt={'Portal Host'} inputIcon={'user'} />
                        </div>

                    </div>
                    <SubmitButton onClick={this.saveConfig} />
                </div>
                <i className={'close-btn'} onClick={this.saveConfig}>
                    <FontAwesomeIcon icon={'times'} />
                </i>
            </div>
        )
    }
}

export default PsConfigModal;
