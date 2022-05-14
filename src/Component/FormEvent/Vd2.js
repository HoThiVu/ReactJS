import React, { Component } from 'react'
// import { useState } from "react";
import styleVd1 from './Vd1.module.css'

class Vd2 extends Component {
    constructor(props) {
        super(props)

        this.state = { selectOption: ' Volvo', }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Form submitting logic, prevent default page refresh
    handleSubmit(event) {
        const { name, job, agreement, movie, discription } = this.state
        event.preventDefault()
        alert(`
	____Your Details____\n
	Name : ${name}
	Job : ${job}
	Agreement : ${agreement}
	Movie : ${movie}
	Discription : ${discription}
	`)
    }


    handleChange(event) {
        this.setState({
            // Computed property names
            // keys of the objects are computed dynamically
            [event.target.name]: event.target.value
        })
    }

    render() {

        return (
            <div className={styleVd1.formVd1}>
                <form onSubmit={this.handleSubmit}>
                    <h2>FORM NHIỀU Ô INPUT</h2>
                    <div>
                        <label><strong>NAME</strong>
                        </label>
                        <input
                            name='name'
                            placeholder='Name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label ><strong>JOB:</strong>
                        </label>
                        <div>
                            <p>Bac Si</p>
                            <input className={styleVd1.radio}
                                name='job'
                                label='BAC SI'
                                type='radio'
                                placeholder='Job'
                                value={this.state.job}
                                onChange={this.handleChange} />

                            <p> Hoa Hau</p>
                            <input className={styleVd1.radio}
                                name='job'
                                type='radio'
                                placeholder='Job'
                                value={this.state.job}
                                onChange={this.handleChange}
                            />
                            <p> y ta</p>
                            <input className={styleVd1.radio}
                                name='job'
                                // label='Y TA'
                                type='radio'
                                placeholder='Job'
                                value={this.state.job}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label ><strong>AGREEMENT: </strong></label>
                        <p>agree?</p>
                        <input
                         name='agreement'
                         // label='Y TA'
                         type='checkbox'
                         placeholder='Job'
                         value={this.state.job}
                         onChange={this.handleChange}/>
                     
                    </div>
                    <div>
                        <label><strong>MOVIES :</strong>
                            <select value={this.state.selectOption} onChange={this.handleChange}>
                                <option value=" Ford">Ford</option>
                                <option value=" Volvo">Volvo</option>
                                <option value=" Fiat">Fiat</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label><strong>DISCRIPTION :</strong>                      
                            <input                           
                                name='discription'
                                placeholder='Discription'
                                value={this.state.discription}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Vd2
