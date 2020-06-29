import React, {Component} from 'react';

class Forms extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault(); // this is stop propagation
    alert(`An input was submitted: Username: ${this.state.username} Password: ${this.state.password}`);
  }
  
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
         <label htmlFor="name">
            Name: 
            <input name="username" onChange={this.handleChange} value={this.state.username} type="text" placeholder="Type in your name"/>
         </label>
         <label htmlFor="password">
            Password:
             <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
         </label>
         <input type="submit"/>
      </form>
    );
  }
}

export default Forms;
