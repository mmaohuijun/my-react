import React from 'react';
import Counter from '../counter/Counter';

class ControlPanel extends React.Component{
    constructor(props){
        super(props);
        this.initValues = [1, 20, 2];
        const initSumCount = this.initValues.reduce((a, b) => a + b, 0);
        this.state = { sumCount: initSumCount };
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
    }

    onCounterUpdate(newValue, previousValue){
        const valueChange = newValue - previousValue;
        this.setState({ sumCount: this.state.sumCount + valueChange });
    }

    render(){
        const { sumCount } = this.state;
        return(
            <div id='container'>
                <Counter caption='First' onUpdate={this.onCounterUpdate} value={this.initValues[0]} />
                <Counter caption='Second' onUpdate={this.onCounterUpdate}  value={this.initValues[1]} />
                <Counter caption='Third' onUpdate={this.onCounterUpdate} value={this.initValues[2]} />
                <p>
                    Total count: { sumCount }
                </p>
            </div>
            )
    }
}

export default ControlPanel;