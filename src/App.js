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
import CoursePage from './pages/CoursePage/CoursePage';



function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Switch>     
        <Route component = {Homepage} exact path="/" />
        <Route component = {FirstYear} path="/first" />      
        <Route component = {SecondYear} path="/second" />      
        <Route component = {ThirdYear} path="/third" />      
        <Route component = {FourthYear} path="/fourth" />   
    </Switch>
    </Router>
    </div>
  );
}

export default App;
