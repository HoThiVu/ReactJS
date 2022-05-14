// var OutPut = (props) => {
//     return(
//         <div>
//             <div>
//                 <p>{props.tenSP}</p>
//                 <img src={props.anh} alt=""/> 
//                 <p>{props.chitiet}</p>
//             </div>
//             <div>
//                 <button onClick={buy}>Đặt mua</button>
//             </div>
//         </div>
//     )
// }


import React, { Component } from 'react';
class OutPut extends Component {
  
    render() {
        return (
            <section className="product_section layout_padding">
                  <div>
                        
                    </div>
                <div className="container">                  
                    <div className="heading_container heading_center">
                        {/* <h2>
                            Our <span>products</span>
                        </h2> */}
                    </div>
                    <div className="row">
                        <h1> {this.props.tenSP}</h1>                   
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                            
                            <div className="option_container">
                                <div className="options">
                                <a href className="option2" onClick={buy}>
                                    Đặt Mua
                                </a>
                                </div>
                            </div>
                            <div className="img-box">
                                <img src= {this.props.anh} alt="VVV" /> 
                            </div>
                            <div className="detail-box">
                                <h5>
                                {this.props.chitiet}
                                {/* {this.props.IDD} */}
                                </h5>
                                <h6>
                                $75
                                </h6>
                            </div>
                            </div>
                        </div>                
                </div>                
                    <div className="btn-box">
                        
                        <a href='# '>
                            View All products
                        </a>
                        

                    </div>
                </div>
            </section> 
         
        );
    }


}
function buy(){
    alert ("Đặt mua hàng thành công")
}

export default OutPut;