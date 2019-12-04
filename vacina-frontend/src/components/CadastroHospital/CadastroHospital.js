import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import '../../App.css';
import axios from 'axios'

class CadastroHospital extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
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
                        hintText = 'Digite o seu username'
                        floatingLabelText = 'username'
                        onChange = {(event, newValue) => 
                        this.setState({username: newValue})}
                        />
                        <br/>
                        <TextField
                        hintText = 'Digite a sua cidade'
                        floatingLabelText = 'cidade'
                        onChange = {(event, newValue) =>
                        this.setState({cidade: newValue})}
                        />
                        <br/>
                        <TextField
                        hintText = 'Digite o estado'
                        floatingLabelText = 'uf'
                        onChange = {(event, newValue) =>
                        this.setState({uf: newValue})}
                        />
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