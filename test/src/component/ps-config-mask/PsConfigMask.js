import React from 'react';
import './ps-config-mask.less';

import PsConfigModal from '../ps-config-modal/PsConfigModal';

class PsConfigMask extends React.Component{
    constructor(props){
        super(props);
        this.saveConfig = this.saveConfig.bind(this);
    }

    getStyle(){
        let showConfig = {};
        if (this.props.ifShowConfig){
            showConfig = { display: 'block' };
        }
        return showConfig
    }

    saveConfig(ifShowConfig){
        this.props.saveConfig(ifShowConfig);
    }

    render(){
        return(
            <div className={'config-mask'} id={'config-mask'} style={this.getStyle()} >
                <PsConfigModal saveConfig={this.saveConfig} />
            </div>
        )
    }
}

export default PsConfigMask;
