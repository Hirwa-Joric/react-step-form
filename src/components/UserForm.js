import React, { Component } from 'react'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }
    // proceed to the next step
    nextStep = ()=>{
        const { step } = this.state;
        this.setState({
            step: step+1
        })
    }

    // proceed to the previous step
    prevvStep = ()=>{
        const { step } = this.state;
        this.setState({
            step: step-1
        })
    }

    // handle change
    handleChange = input => e => {
        this.setState({[input]:e.target.value})
    }
    
  render() {
    return (
      <div>UserForm</div>
    )
  }
}

export default UserForm