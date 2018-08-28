import React from 'react';
import './ps-tab-content.less';

class PsTabContent extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        const { currentIndex, children } = this.props;

        function getActiveStyle(index){
            let showContent = {};
            if(index === currentIndex){
                showContent = {
                    display: 'block'
                }
            }
            return showContent;
        }

        return(
            <div className={'tab-content'}>
                {
                    children.map((child, index) => {
                        return(
                            <div
                                key={index}
                                className={`tab-content-col${index}`}
                                style={getActiveStyle(index)}>
                                {child}
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PsTabContent;
