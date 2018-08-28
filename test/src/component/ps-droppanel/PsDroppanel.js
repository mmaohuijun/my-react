import React from 'react';
import './ps-droppanel.less';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class PsDroppanel extends React.Component{
    render(){
        return(
            <div className={'select-input'}>
                <input type="text" placeholder={'select command'}/>
                <span>
                    <FontAwesomeIcon icon="caret-down" className={'header-icon'} />
                </span>
            </div>
        )
    }
}

export default PsDroppanel;
