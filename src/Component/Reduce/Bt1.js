import React, { Component } from 'react';

class Bt1 extends Component {
    students = [
        {
          id: "11",
          marks: 31
        },
        {
          id: "12",
          marks: 80
        },
        {
          id: "3",
          marks: 98
        }
      ];
      render() {
        let total = this.students.reduce(function(prev, current) 
        {
          return prev + current.marks;
        }, 1);
      
        return <h1>Total Marks, {total}</h1>;
      }
}

export default Bt1;