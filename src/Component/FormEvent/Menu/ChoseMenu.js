import React, { Component } from 'react';
import menu from '../../../MenuData';
import "./../../../Assets/css/Menucss.css"
class ChoseMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {            
          tiendu: "",
          tiennhap: "",
          luachon: "Cà phê sữa"
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      };
      // checkOder = (tiennhap) => {
      //   if (tiennhap > this.state.prices){
      //     alert('Bạn đã chọn thành công'+ this.state.value )
      //   }
      //   else{
      //     alert('Bạn không đủ tiền')
      //   }
      // }
      setResult = () => {
        if (this.state.avg > 4.5) this.setState({ result: "Được lên lớp" });
        else this.setState({ result: "Ở lại lớp" });
    };
      handleChange(event) {
        this.setState({luachon: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();

        var dirk = menu().filter(ele =>  ele.name === this.state.luachon)[0]
        var mes = 'Bạn đã chọn  '+ dirk.name +' với số tiền là ' + dirk.prices 
        alert(mes)
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
                <select onChange={this.handleChange}>
                   {data.map(ele=>
                   <option value={ele.name}>{ele.name}</option>
                   )}
                </select>
                <br/> 
                <br/>
                <label >Nhập tiền: </label>
                <br />
                <input id="sotien" ype="text " name="tiennhap " defaultValue="Nhập Số Tiền... " />
                <br />
                <label >Số Tiền Dư Của Bạn là : </label>
                <br />
                <br />
                <button id="tinh" defaultValue="Tinh " className="btn "  type="submit"  > Tính</button>
             </div>
          </form>
       </div>
        );
    }
}

export default ChoseMenu;