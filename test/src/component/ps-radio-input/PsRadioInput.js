import React from 'react';
import './ps-radio-input.less';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class PsRadioInput extends React.Component{
    render(){
        return(
            <div className={'radio-input'}>
                <div>
                    <i>
                        <FontAwesomeIcon icon={'circle'} />
                        <FontAwesomeIcon icon={'dot-circle'} />

                    </i>

                </div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

export default PsRadioInput;
