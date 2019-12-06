import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CadastroHospital from './components/CadastroHospital/CadastroHospital'
import Login from './components/Login/Login'
import CadastroCartao from './components/CadastroCartao/CadastroCartao'

class App extends Component{
  render(){
    return (
      <div  className = 'App'>
      <CadastroCartao></CadastroCartao>
      </div>
  );
} 
}

export default App;
