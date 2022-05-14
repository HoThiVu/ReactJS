import React, { Component } from 'react';
import categoryCSS from './Lefftt.module.css'
class Left extends Component {
    render() {
        return (
            <div className={categoryCSS.leftItem}>
                <h1>Category</h1>
                <a href='# '>item 1</a>
                <a href='# '>item 2</a>
                <a href='# '>item 3</a>
                <a href='# '>item 3</a>
                <a href='# '>item 4</a>
            </div>
        );
    }
}

export default Left;