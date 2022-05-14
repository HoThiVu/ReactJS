import React, { Component } from 'react';
// import Right from './right/Right'
import Left from './left/Left'
import styleContentCSS from './Contentt.module.css'
import RightDataNc from './right/RightDataNc';
class Content extends Component {
    render() {
        return (
            <div className={styleContentCSS.styleContent}>           
                <Left></Left>
                {/* <Right></Right>  
                            */}
                <RightDataNc></RightDataNc>
            </div>
        );
    }
}

export default Content;