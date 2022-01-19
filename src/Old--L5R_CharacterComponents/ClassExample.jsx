import React, { Component } from 'react'


class ClassExample extends Component {
  constructor(){
    super(); 
    this.state = {
      firstName: '',
      lastName: ""
    }
    this.formerMethod = this.formerMethod.bind(this)
  }
    
 formerMethod (event, prevState) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };


  render() {
    return (
      <div>
        <p>Your Name: {this.state.firstName}</p>
        <p>Your Name: {this.state.lastName}</p>
        <input name='firstName' value={this.state.name} onChange={(event) => this.formerMethod(event)} />
        <input name='lastName' value={this.state.name} onChange={(event) => this.formerMethod(event)} />
      </div>
    )
  } 
}

export default ClassExample;