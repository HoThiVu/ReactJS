import React, { Component } from 'react';

class ContVd3 extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.myDataProp}
                onChange = {this.props.updataStateProp}/>
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}

export default ContVd3;