import React, { Component } from 'react';
 
const INITIAL_STATE = {
    user: null,
    email: '',
    password: ''
}

class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };

    this.onChange = this.onChange.bind(this);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  logIn = event => {
    this.props.firebase
      .doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(authUser => {
        console.log(authUser)
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        console.error(error)
      });

    event.preventDefault();
  };


  render() {
    const isInvalid = this.state.email === '' || this.state.password === '';

    return (
      <div className="login-form">
        <div className="login-form-container">
            <label>
                <input name="email" type="text" value={this.state.email} onChange={this.onChange} placeholder="Email"/>
            </label>
            <label>
                <input name="password" type="password" value={this.state.password} onChange={this.onChange} placeholder="Password"/>
            </label>
            <button disabled={isInvalid} className="submit-btn" onClick={this.logIn}>Sign in</button>
        </div>
      </div>
    );
  }
}

export default loginForm;
