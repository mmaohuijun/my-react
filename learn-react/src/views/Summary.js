import React from 'react';
import SummaryStore from '../store/SummaryStore.js';

class Summary extends React.Component{
    constructor(props){
        super(props);
        this.state = { summary: SummaryStore.getSummary() };
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentDidMount(){
        SummaryStore.addChangeListener(this.onUpdate);
    }

    componentWillRemove(){
        SummaryStore.removeChangeListener(this.onUpdate);
    }

    onUpdate(){
        //const newSummary = SummaryStore.getSummary();
        //this.setState({ summary: newSummary });
        this.setState({
            summary: SummaryStore.getSummary()
        })
    }

    render(){
        const { summary } = this.state;
        return(
            <div>Total count: {summary}</div>
        )
    }
}

export default Summary;