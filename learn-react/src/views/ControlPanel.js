import React from 'react';
import Counter from './Counter';
import Summary from './Summary';

class ControlPanel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id='container'>
                <Counter caption='First' />
                <Counter caption='Second' />
                <Counter caption='Third' />
                <Summary></Summary>
            </div>
            )
    }
}

export default ControlPanel;