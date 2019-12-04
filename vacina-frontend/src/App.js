import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CadastroHospital from './components/CadastroHospital/CadastroHospital'

class App extends Component{
  render(){
    return (
      <div  className = 'App'>
      <CadastroHospital></CadastroHospital>
      </div>
  );
} 
}

export default App;
