import React, { Component } from 'react';
import './serial-command.less';

class SerialCommand extends Component{
    constructor(props){
        super(props);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isFocused: false,
            value: ''
        }
    }

    handleFocus(){
        this.setState({ isFocused: true });
        if (this.state.value) {

        }
    }

    handleBlur(){
        this.setState({ isFocused: false });
    }

    handleChange(e){
        this.setState({ value: e.target.value });
    }

    getSpanStyle(){
        let spanStyle;
        if (this.state.isFocused || this.state.value) {
            spanStyle = {
                fontSize: '16px',
                top: '-10px',
                transition: 'all .3s ease'
            };
        }
        return spanStyle;
    }

    getFocusInputStyle(){
        let focusInputStyle;
        if (this.state.isFocused=== true) {
            focusInputStyle = {
                background: '#ccc'
            };
        }
        return focusInputStyle;
    }

    render(){
        const { commandItem } = this.props;
        return(
            <li className='serial-command'>
                <input
                    type="text"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    style={this.getFocusInputStyle()}
                    value={this.state.value}
                />
                <span style={this.getSpanStyle()}>{commandItem.name}</span>
            </li>
        )
    }
}

export default SerialCommand;
