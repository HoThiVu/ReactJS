import { getValue } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import productData from '../dataP';

import Mm from '../Component/ex/Mm'
class States extends Component {
    constructor(props){
        // var arr = productData();
        super()
        this.state = productData()
        // super(props);
        // this.state ={arr};
        // super(props);
        // this.state ={
        //     flieds:{
        //         name:'Hồ thị Vư',
        //         email: 'hothivu2001',
        //     }
        // }
      
    }

    render() {
        return (
            <div>
                <h1>hellooo</h1>
                {
                this.state.map( Value => {
                    return (<Mm image = {Value.image} name={Value.name} > </Mm>)
                    }
                )
                }
                
            </div>
            // bt2-----------------------------
            // <div className={rightContent.ndBentrai}>
            //     {
            //         this.state.arr.map(key => 
            //            <div>
            //                <div className={rightContent.kc}> <h1>{key.name}</h1> </div>
            //                <div className={rightContent.kc}><img src={key.img} alt=""/></div>
            //                <div> <br></br><br></br><h2>{key.detail}</h2></div> 
            //                <button type="submit"
            //                     // className="button"
            //                     // name="add"
            //                     defaultValue="Add to cart" 
            //                     >Mua Hàng
            //                 </button>                         
            //            </div>
            //         )
                   
                    
            //     }
              //BT1------------------------------------------------- 
            // </div>
            // <div>
            //     <h1>{this.state.flieds.name}</h1>
            //     <h1>{this.state.flieds.email}</h1>
                
            // </div>

           
        );
    }
}

export default States;