import React from 'react';
import './serial-command-list.less';
import SerialCommand from '../serial-command/SerialCommand';

class SerialCommandList extends React.Component{
    // constructor(props){
    //     super(props);
    // }


    render(){
        const { command } = this.props;
        return(
            <ul className={'label-list'}>
                {
                    command.map((commandItem,index) => (
                        <SerialCommand commandItem={commandItem} key={index} />
                    ))
                }
            </ul>
        )
    }
}

export default SerialCommandList;
