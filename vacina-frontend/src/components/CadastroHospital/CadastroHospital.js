import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import '../../App.css';

class CadastroHospital extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            codigo: '',
            senha: '',
            cidade: '',
            uf: '',
        }

    }
    render(){
        return(
            <div className = 'center'>
                <MuiThemeProvider>
                    <div>
                        <AppBar 
                        title = 'CadastroHospital'
                        />
                        <TextField
                        hintText = 'Digite o código do hospital'
                        floatingLabelText = 'Código Hospital'
                        onChange = {(event, newValue) =>
                            this.setState({codigo: newValue})
                        }
                        />
                        <br/>
                        <TextField 
                        hintText = 'Digite o seu username'
                        floatingLabelText = 'Username'
                        onChange = {(event, newValue) => 
                        this.setState({username: newValue})}
                        />
                        <br/>
                        <TextField
                        hintText = 'Digite a sua senha'
                        floatingLabelText = 'Senha'
                        onChange = {(event, newValue) =>
                        this.setState({senha: newValue})}
                        />
                        <br/>
                        <TextField
                        hintText = 'Digite a sua cidade'
                        floatingLabelText = 'Cidade'
                        onChange = {(event, newValue) =>
                        this.setState({cidade: newValue})}
                        />
                        <br/>
                        <TextField
                        hintText = 'Digite o estado'
                        floatingLabelText = 'UF'
                        onChange = {(event, newValue) =>
                        this.setState({uf: newValue})}
                        />
                        <br/>
                        <br/>
                        <RaisedButton label='Enviar' primary = {true} style = {style}
                        onClick = {(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 0,
}

export default CadastroHospital;