import React, { Component } from 'react'; 

class Item extends Component {
    handleClick = () => {
        console.log('this is:', this);
      }
    render() {
        return (
            <div className="product">
            <div className="text">
                <div className="p-name">
                    {/*<a href="item.html>LUMIX DCM-G2</a>*/} 
                    <a href="item.html">{this.props.tenSP}</a> 
                </div>
            </div>
            <div className="p-img">
                <img src={this.props.anh} width={200} height={200} />
            </div>
            <div className="text">
                <div className="p-cat">{this.props.chitiet}</div>
                <div className="p-price">Please call</div>
                {/* <button
                    type="submit"
                    // className="button"
                    // name="add"
                     defaultValue="Add to cart" 
                     onClick={this.props.handleClick}                 
                /> */}
               <button type="submit"
                    // className="button"
                    // name="add"
                     defaultValue="Add to cart" 
                     onClick={() => this.props.handleClick()} >click me</button>
            </div>
            <div className="clear" />  
            </div>
        );
    }
}

export default Item;
