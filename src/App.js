import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Homepage from './pages/Homepage/Homepage';
import FirstYear from './pages/FirstYear/FirstYear';
import SecondYear from './pages/SecondYear/SecondYear';
import ThirdYear from './pages/ThirdYear/ThirdYear';
import FourthYear from './pages/FourthYear/FourthYear';
import Navbar from './components/Navbar/Navbar';
import SignInAndSignUpPage from './pages/Sign-In-And-Sign-Up-Page/Sign-in-and-Sign-Up-Page';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user);
    })    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  

  render() {
    return (
      <div className="App">
      <Router>
      <Navbar currentUser = {this.state.currentUser} />
      <Switch>     
          <Route component = {Homepage} exact path="/" />
          <Route component = {FirstYear} path="/first" />      
          <Route component = {SecondYear} path="/second" />      
          <Route component = {ThirdYear} path="/third" />      
          <Route component = {FourthYear} path="/fourth" /> 
          <Route component = {SignInAndSignUpPage} path = "/signIn"/>  
      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
