import React from 'react';
import './submit-button.less';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SubmitButton extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div onClick={this.props.onClick} className={'submit-btn'}>
                <div className={'btn-wrapper'}>
                    <button>
                        <FontAwesomeIcon icon={'check'} />
                    </button>
                </div>
            </div>
        )
    }
}

export default SubmitButton;
