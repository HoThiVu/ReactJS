import React, { Component } from 'react';
import productData from '../dataP';
import rightContent from './styleStates.module.css'
class States1 extends Component {
    constructor(props){
        var arr = productData();  
        super(props);
        this.state ={arr};          
    }

    render() {
        return (
          
            <div className={rightContent.ndBentrai}>
                {
                    this.state.arr.map(key => 
                       <div>
                           <div className={rightContent.kc}> <h1>{key.name}</h1> </div>
                           <div className={rightContent.kc}><img src={key.img} alt=""/></div>
                           <div> <br></br><br></br><h2>{key.detail}</h2></div> 
                           <button type="submit"
                                defaultValue="Add to cart" 
                                >Mua Hàng
                            </button>                         
                       </div>
                    )                    
                }             
           </div>           
        );
    }
}

export default States1;