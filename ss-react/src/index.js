import React from 'react';
import reactDOM from 'react-dom';
import './style.less';
import style from './page/page.less';

import Header from './header/Header';
import InputComponent from './input-component/InputComponent';
import PsDroppanel from './ps-droppanel/PsDroppanel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from './fontAwesome';
class App extends React.Component{
    render(){
        return(
            <div id={style.container}>
                <Header />
                <main>
                    <InputComponent />
                    <div className={style['content-wrapper']}>
                        <div style={{width:'40%'}} className={style['content-left-wrapper']}>
                            <PsDroppanel />
                            <div className={style['content-list-wrapper']}>
                                <ul className={style['label-list']}>
                                    <li>Attribute name?</li>
                                    <li>Attribute value?</li>
                                    <li>Comment Text?</li>
                                </ul>
                                <ul className={style['label-list']}>
                                    <li>Comment Text?</li>
                                </ul>
                            </div>

                        </div>
                        <div style={{width: '60%'}} className={style['content-right-wrapper']}>
                            {/*<div className={style['content-doc-wrapper']}>*/}
                                {/*<ul className={style['doc-tab-list']}>*/}
                                    {/*<li>Document</li>*/}
                                    {/*<li style={{borderBottom: '2px solid #000'}}>Infomation</li>*/}
                                    {/*<li>Unit Element</li>*/}
                                    {/*<li>Work Log</li>*/}
                                {/*</ul>*/}
                                {/*<div>*/}
                                    {/*<table className={style['info-table']}>*/}
                                        {/*<th>*/}
                                            {/*<td >Employee</td>*/}
                                        {/*</th>*/}
                                        {/*<tr>*/}
                                            {/*<td>EMPLOYEE ID</td>*/}
                                            {/*<td>EMPLOYEE CERTIFICATE</td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                            {/*<td>11111</td>*/}
                                            {/*<td>n/a</td>*/}
                                        {/*</tr>*/}
                                    {/*</table>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </main>
                <footer>
                    Production Scanning © 2010-2018 Sanmina Corporation. All rights reserved.
                </footer>
            </div>
        )
    }
}

reactDOM.render(<App />, document.getElementById('app'));
