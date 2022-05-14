import React, { Component } from 'react';

class Car extends Component {
    constructor(props){
        super(props);
        this.state ={
            flieds:{
                name:'Hồ thị Vư',
                email: 'hothivu2001',
            }
        }
      
    }

    render() {
        return (
            <div>
                <h1>{this.state.flieds.name}</h1>
                <h1>{this.state.flieds.email}</h1>
                
            </div>

           
        );
    }
}

export default Car;