import React, { Component } from 'react';

class ThuChose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sua: 0,
            da: 0,
            dau: 0,
            tra: 0,           
            tiendu: "",
            result: "",
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     alert('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    //   }

    // handleChange = (event) => {
    //     let key = event.target.name;
    //     let val = event.target.value;

    //     this.setState({ [key]: val });
    //     this.setState((state) => ({
    //         tiendu: parseFloat((parseFloat(state.val) - parseFloat(state.hk2)) / 2),
    //     }));
    //     this.setResult();
    //     this.setXL();
    };
    handleSubmit = (event) => {
        event.preventDefault();
        alert("Bạn là học sinh" + this.state.result);
    };
    setResult = () => {
        if (this.state.val > 4.5) this.setState({ result: "Được lên lớp" });
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
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite flavor:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default ThuChose;