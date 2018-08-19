import React from 'react';
import CounterStore from '../store/CounterStore.js';
import * as Actions from '../Action.js';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleDecreaseButton = this.handleDecreaseButton.bind(this);
        this.handleIncreaseButton = this.handleIncreaseButton.bind(this);
        this.state = {
            value: CounterStore.getCounterValues()[props.caption]
        }
    }

    ComponentDidMount(){
        CounterStore.addChangeListener(this.onChange);
    }

    ComponentWillUnmount(){
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange(){
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({ value: newCount })
    }

    handleDecreaseButton(){
        Actions.decrement(this.props.caption);
    }

    handleIncreaseButton(){
        Actions.increment(this.props.caption)
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