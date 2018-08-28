import React from 'react';
import './ps-input.less';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class PsInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            focused: false
        };
        this.textInput = React.createRef();
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleFocus(){
        this.setState({ focused: true });
        this.psTextInput = { border: '2px solid #000' };
        this.headerIcon = {
            borderRight: '2px solid #000',
            color: '#000'
        };
    }

    handleBlur(){
        this.setState({ focused: false });
        if (this.textInput.current.value) {
            this.spanBlur = {
                top: '-7px',
                fontSize: '0.75rem',
                paddingLeft: '50px'
            }
        }
        this.psTextInput = { border: '2px solid #999' };
        this.headerIcon = {
            borderRight: '2px solid #999',
            color: '#999'
        };
    }


    render(){
        const { inputPrompt, inputIcon } = this.props;

        return(
            <div className={'ps-text-input'} style={this.psTextInput}>
                <i style={this.headerIcon} className={'fa-lg'}>
                    <FontAwesomeIcon
                        icon={inputIcon}
                        className={'header-icon'}
                    />
                </i>
                <span className={this.state.focused ? 'focused' : ''} style={this.spanBlur}>
                    {inputPrompt}
                </span>
                <input
                    ref={this.textInput}
                    type="text"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </div>
        )
    }

}

// class PsInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             focused: false
//         };
//         this.handleFocus = this.handleFocus.bind(this);
//         this.handleBlur = this.handleBlur.bind(this);
//     }
//
//     handleFocus(){
//         this.setState({ focused: true });
//         console.log('focus!');
//     }
//
//     handleBlur(){
//         this.setState({ focused: false });
//         console.log('blur!');
//     }
//
//
//     render(){
//         const { inputPrompt, inputIcon } = this.props;
//
//         return(
//             <div className={style['ps-text-input']}>
//                 <input
//                     type="text"
//                     id={'div1'}
//                     onFocus={this.handleFocus}
//                     onBlur={this.handleBlur}
//                 />
//                 <label htmlFor="div1">
//                    <span>
//                        {inputPrompt}
//                     </span>
//                 </label>
//
//                 <i>
//                     <FontAwesomeIcon
//                         icon={inputIcon}
//                         className={style['header-icon']}
//                     />
//                 </i>
//             </div>
//         )
//     }
//
// }

export default PsInput;
