import React from 'react';
import style from './ps-droppanel.less';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class PsDroppanel extends React.Component{
    render(){
        return(
            <div className={style['select-input']}>
                <input type="text" placeholder={'select command'}/>
                <span>
                    <FontAwesomeIcon icon="caret-down" className={style['header-icon']} />
                </span>
            </div>
        )
    }
}

export default PsDroppanel;
