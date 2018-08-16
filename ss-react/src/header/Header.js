import React from 'react';
import style from './header.less';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className={style['logo-img']}>
                    <img src="../../public/42Q_light.png" alt="42Q"/>
                </div>
                <div className={style['header-icon-wrapper']}>
                    <i  className={style['header-icon']}>
                        <FontAwesomeIcon icon="file"/>
                    </i>
                    <i className={style['header-icon']}>
                        <FontAwesomeIcon icon="file" />
                    </i>
                    <span>|</span>
                    <i className={style['header-icon']}>
                        <FontAwesomeIcon icon="user" />
                    </i>
                    <i className={style['header-icon']}>
                        <FontAwesomeIcon icon="cog" />
                    </i>
                </div>
            </header>
        )
    }
}

export default Header;
