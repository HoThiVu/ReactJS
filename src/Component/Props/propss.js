// import React, { Component } from 'react';
import styles from './propss.module.css'
function Numberone(props) {
    return (
        <div className={styles.content}>     
          <div>
            <img alt="vvv"className={styles.imgg}src={props.linkanh} />
            <p>{props.tieude}</p>
            <p>Giá sản phẩm: 400k</p>         
          </div>
        </div>
      )};

export default Numberone;