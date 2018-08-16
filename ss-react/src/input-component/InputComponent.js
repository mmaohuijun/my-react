import React from 'react';
import style from './input-component.less';
import PsInput from "../ps-input/PsInput";

class InputComponent extends React.Component{
    render(){
        return(
            <div className={style['input-wrapper']}>
                <div className={style['ps-input']} style={{width: '40%'}}>
                    <PsInput inputPrompt={'SERIAL NUMBER'} inputIcon={'barcode'} />
                </div>
                <div className={style['ps-input']} style={{width: '30%'}}>
                    <PsInput inputPrompt={'PART NUMBER'} inputIcon={'tags'} />
                </div>
                <div className={style['ps-input']} style={{width: '15%'}}>
                    <PsInput inputPrompt={'QUANTITY'} inputIcon={'calculator'} />
                </div>
                <div className={style['ps-input']} style={{width: '15%', marginRight: '6px'}}>
                    <PsInput inputPrompt={'REVISION'} inputIcon={'clipboard'} />
                </div>
            </div>
        )
    }
}

export default InputComponent;
