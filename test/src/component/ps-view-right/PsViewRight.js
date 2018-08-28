import React from 'react';
import './ps-view-right.less';
import PsTabPanel from '../ps-tab-panel/PsTabPanel';
import PsTabContent from '../ps-tab-content/PsTabContent';
import PsInfoCard from '../ps-info-card/PsInfoCard';

class PsViewRight extends React.Component{
    constructor(props){
        super(props);
        this.handleClickPanel = this.handleClickPanel.bind(this);
        this.state = { currentIndex: 1 }
    }

    handleClickPanel(index){
        this.setState({ currentIndex: index });
    }

    render(){
        const { currentIndex } = this.state;
        return(
            <div>
                <PsTabPanel onClickPanel={this.handleClickPanel} currentIndex={currentIndex}></PsTabPanel>
                <PsTabContent currentIndex={currentIndex}>
                    <span>document</span>
                    <PsInfoCard />
                    <div>unit element</div>
                    <div>work log</div>
                </PsTabContent>
            </div>
        )
    }
}

export default PsViewRight;
