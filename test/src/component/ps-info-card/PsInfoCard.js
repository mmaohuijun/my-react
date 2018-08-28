import React from 'react';
import './ps-info-card.less';

class PsInfoCard extends React.Component{
    render(){
        return(
            <div className={'ps-info-card'}>
                <div className={'info-card-title'}>Employee</div>
                <div className={'info-card-body'}>
                    <div className={'info-card-content'}>
                        <i>EMPLOYEE ID</i>
                        <br/>
                        <span className={'span-id'}>23221</span>
                    </div>
                    <div className={'info-card-content'}>
                        <i>EMPLOYEE CERTIFICATE</i>
                        <br/>
                        <span>n/a</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default PsInfoCard;
