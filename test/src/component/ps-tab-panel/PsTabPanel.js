import React from 'react';
import './ps-tab-panel.less';

class PsTabPanel extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    clickTab(index){
        this.props.onClickPanel(index);
    }

    itemNav = (index) => {
        return index === this.props.currentIndex ? 'activeItem' : '';
    };

    render(){

        const tabList = ['Document', 'Info', 'Unit Element', 'Work Log'];
        return(
            <ul className={'tab-panel-ul'}>
                {
                    tabList.map((item, index) => {
                        return(
                            <li
                                onClick={this.clickTab.bind(this, index)}
                                className={this.itemNav(index)}
                                key={index}>
                                {item}
                                </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default PsTabPanel;
