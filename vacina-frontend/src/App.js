import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CadastroHospital from './components/CadastroHospital/CadastroHospital'
import Login from './components/Login/Login'

class App extends Component{
  render(){
    return (
      <div  className = 'App'>
      <Login></Login>
      </div>
  );
} 
}

export default App;
