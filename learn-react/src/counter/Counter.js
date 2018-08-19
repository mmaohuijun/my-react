import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleDecreaseButton = this.handleDecreaseButton.bind(this);
        this.handleIncreaseButton = this.handleIncreaseButton.bind(this);
        this.state = { value: this.props.value || 0 };
    }

    handleDecreaseButton(){
        //this.setState({ value: this.state.value - 1 })
        this.updateCount(false);
    }

    handleIncreaseButton(){
        //this.setState({ value: this.state.value + 1 })
        this.updateCount(true);
    }

    updateCount(isIncrement){
        const previousValue = this.state.value;
        const newValue = isIncrement ? this.state.value + 1 : this.state.value - 1;
        this.setState({ value: newValue });
        this.props.onUpdate(newValue, previousValue);
    }

    render(){
        const { caption } = this.props;
        const { value } = this.state;
        return(
           <div>
               <button onClick={this.handleDecreaseButton}>-</button>
               <button onClick={this.handleIncreaseButton}>+</button>
               <span>
                   {caption} count: {value}
               </span>
           </div>
        )
    }
}

export default Counter;