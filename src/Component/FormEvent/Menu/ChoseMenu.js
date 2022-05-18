import React, { Component } from 'react';
import menu from '../../../MenuData';
import "./../../../Assets/css/Menucss.css"
class ChoseMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          cfSua: 0,
          cfDa: 0,
          Sdau: 0,
          tra: 0,           
          tiendu: "",
          result: "",};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      };
      // handleChange = (event) => {
    //     let key = event.target.id;
    //     let val = event.target.price;

    //     this.setState({ [key]: val });
    //     this.setState((state) => ({
    //         tiendu: parseFloat((parseFloat(state.val) - parseFloat(state.val)) / 2),
    //     }));
    //     this.setResult();
    //     this.setXL();
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        
          alert('Bạn đã chọn '+ this.state.value )
      
        event.preventDefault();
      }   
       
    render() {
        let data = menu();
        return (
          <div className="container">
          <form onSubmit={this.handleSubmit}>
             <div id="selectt">
                <div className="menu">
                   <h1 id="text-menu">MENU</h1>
                   {data.map(ele=>
                   <p>{ele.name}.....................................................{ele.prices}đ</p>
                   )}
                </div>
                <select value={this.state.value} onChange={this.handleChange}>
                   {data.map(ele=>
                   <option value={ele.name}>{ele.name}</option>
                   )}
                </select>
                <br/> 
                <br/>
                <label htmlFor>Nhập tiền: </label>
                <br />
                <input id="sotien" ype="text " name="sotien " defaultValue="Nhập Số Tiền... "                      />
                <br />
                <br />
                <button id="tinh" defaultValue="Tinh " className="btn " name="submit " type="submit" value="Submit"> Tính</button>
             </div>
          </form>
       </div>
        );
    }
}

export default ChoseMenu;