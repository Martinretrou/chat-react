import React, { Component } from 'react';
 
import Form from '../components/login/Form';
import { FirebaseContext } from '../firebase/index';

class Login extends Component {

  render() {
    return (
      <div className="login-page">
        <header className="login-page-header">
            <p>Welcome,</p>
            <p>sign in to continue</p>
        </header>
        <FirebaseContext.Consumer>
            {firebase => <Form firebase={firebase} />}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}

export default Login;
