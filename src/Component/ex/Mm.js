import React, { Component } from 'react';
import rightContent from './styleStates.module.css';
class Mm extends Component {
    render() {
        return (
            <div>
                <div className={rightContent.kc}> <h1>{this.props.name}</h1> </div>
                <div className={rightContent.kc}><img src={this.props.img} alt=""/></div>
                {/* <div> <br></br><br></br><h2>{this.props.detail}</h2></div>  */}
                <button type="submit"
                        className="button"
                        name="add"
                        defaultValue="Add to cart" 
                        >Mua Hàng
                           </button>                         
                      </div>
        );
    }
}

export default Mm;