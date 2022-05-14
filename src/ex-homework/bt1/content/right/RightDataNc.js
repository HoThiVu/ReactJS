import React, { Component } from 'react';
import DataNangCao from '../DataNangCao';
import ItemData from './item/ItemData';
import rightContent from './rightCSS.module.css'
class RightDataNc extends Component {
     render() {
         var dis_products = DataNangCao('products');
        //  var dis_categories = DataNangCao("categories");
        var items = []; //cac component
        for (var i = 0; i < dis_products.length; i++) {
            items[i] = <ItemData tenSP = {dis_products[i].name} anh ={dis_products[i].img}  chitiet =  {dis_products[i].detail} ></ItemData>
        }
        return (
            <div id="right-content">
                <h2>Product:</h2>
                    <div className={rightContent.ndBentrai}>
                        {items}
                        <div />             
                </div>          
            </div>
        )
    }
    } 

export default RightDataNc;