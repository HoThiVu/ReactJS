import React, { Component } from 'react';
class Tinhdiem extends Component {
    constructor(props){
        super(props);
        this.state = {
            hk1: 0,
            hk2: 0,
            avg: 0,
            result: "",
            xl: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        let key = event.target.name;
        let val = event.target.value;

        this.setState({ [key]: val });
        this.setState((state) => ({
            avg: parseFloat((parseFloat(state.hk1) + parseFloat(state.hk2)) / 2),
        }));
        this.setResult();
        this.setXL();
    };
    handleSubmit = (event) => {
        event.preventDefault();
        alert("Bạn là học sinh" + this.state.xl);
    };
    setResult = () => {
        if (this.state.avg > 4.5) this.setState({ result: "Được lên lớp" });
        else this.setState({ result: "Ở lại lớp" });
    };
    setXL = () => {
        if (this.state.avg < 4.5) this.setState({ xl: "yếu" });
        else if (this.state.avg < 6.5) this.setState({ xl: "trung bình" });
        else if (this.state.avg < 8) this.setState({ xl: "khá" });
        else if (this.state.avg < 9) this.setState({ xl: "giỏi" });
        else if (this.state.avg < 10) this.setState({ xl: "Xuất sắc" });
    };
    render() {
        return (
            <div class="container">
            <h2 class="title">KẾT QUẢ HỌC TẬP</h2>
            <form onSubmit={this.handleSubmit}>
               <div id="fname" > <span htmlFor="hk1">Điểm HK1</span>
                  <input type="number"  id="hk1" name="hk1" max={10} min={0} defaultValue={0} required onChange={this.handleChange}/> 
                  <div className="invalid-feedback">Điểm không hợp lệ </div>
               </div>
               <div id="lname" htmlFor="hk2"> <span>Điểm HK2</span>
                  <input type="number" id="hk2" name="hk2" max={10} min={0} defaultValue={0} required onChange={this.handleChange}/> 
                  <div className="invalid-feedback">Điểm không hợp lệ </div>
               </div>
               <div id="nname"> <span  htmlFor="hk2">Điểm trung bình</span>
                  <input type="number" className="form-control" readOnly value={this.state.avg}/> 
               </div>
               <div id="email"> <span htmlFor="hk2">Kết Qủa</span>
                  <input type="text" className="form-control" defaultValue={0} readOnly value={this.state.result}/> 
               </div>
               <div id="pass"> <span  htmlFor="hk2">Xếp loại học lực</span>
                  <input type="text" className="form-control" defaultValue={0} readOnly value={this.state.xl}/> 
               </div>            
               <input  type="submit" value="Submit"/>              
            </form>
         </div>
        );
    }
}

export default Tinhdiem;