import React, { Component } from 'react';
import styleVd1 from './Vd1.module.css'
class Vd1 extends Component {
    constructor(props) {
        super(props);
        this.state = {Username: ''};
     
        // this.myHandleChange = this.myHandleChange.bind(this);
        // this.myHandleSubmit = this.myHandleSubmit.bind(this);
      }
      myHandleSubmit = (event) => {
        alert('You are submitting: ' + this.state.Username);
        event.preventDefault();
      }

      myHandleChange(event) {
        this.setState({Username: event.target.value});
      }
     
      render() {
        return (
         <div className={styleVd1.formVd1}>
                        <form onSubmit={this.myHandleSubmit}>
                            <h1>Hello {this.state.Username}</h1>
                            <label>
                            Enter your name, and submit:
                            <input type="text" onChange={this.myHandleChange.bind(this)} />
                            </label>
                            <input type="submit" />
                        </form>
        </div>  
        );
      }
}

export default Vd1;