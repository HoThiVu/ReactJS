import React, { Component } from 'react';

class Vh extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Bạn đã chọn :' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Cà phê sữa">Cà phê sữa</option>
            <option value="Cà phê đá">Cà phê đá</option>
            <option value="Trà Chanh">Trà Chanh</option>
            <option value="Sữa Dâu">Sữa Dâu</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Vh;