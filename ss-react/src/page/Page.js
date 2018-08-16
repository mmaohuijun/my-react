import React from 'react';
import style from './page.less'

class Page extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id={style.container}>
                <header></header>
                <main></main>
                <footer></footer>
            </div>
        )
    }
}

export default Page;
