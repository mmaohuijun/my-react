import React from 'react';
import './input-component.less';
import PsInput from "../ps-input/PsInput";

class InputComponent extends React.Component{
    render(){
        return(
            <div className={'input-wrapper'}>
                <div className={'ps-input-col1'}>
                    <div style={{ margin: '6px 0 6px 6px' }}>
                        <PsInput inputPrompt={'SERIAL NUMBER'} inputIcon={'barcode'} />
                    </div>
                </div>
                <div className={'ps-input-col2'}>
                    <div style={{ margin: '6px 0 6px 6px' }}>
                        <PsInput inputPrompt={'PART NUMBER'} inputIcon={'tags'} />
                    </div>
                </div>
                <div className={'ps-input-col3'}>
                    <div style={{ margin: '6px 0 6px 6px' }}>
                        <PsInput inputPrompt={'QUANTITY'} inputIcon={'calculator'} />
                    </div>
                </div>
                <div className={'ps-input-col4'}>
                    <div style={{ margin: '6px 0 6px 6px' }}>
                        <PsInput inputPrompt={'REVISION'} inputIcon={'calculator'} />
                    </div>
                </div>
            </div>
        )
    }
}

export default InputComponent;
