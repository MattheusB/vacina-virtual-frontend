import React, {Component} from 'react'
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar, TextField } from "material-ui";
import RaisedButton from "../../../../node_modules/material-ui/RaisedButton/RaisedButton";
import axios from '../../../../node_modules/axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            senha: ''
        }
    }

    render (){
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title='Login'/>
                        <TextField 
                            hintText = 'Digite o seu username'
                            floatingLabelText = 'Username'
                            onChange = {(event, newValue) =>
                                this.setState({username: newValue})
                            }
                        />
                        <br/>
                        <TextField 
                            hintText = 'Digite a sua senha'
                            floatingLabelText = 'Senha'
                            onChange = {(event, newValue) =>
                                this.setState({senha: newValue})
                            }
                        />
                        <br/>
                        <RaisedButton label='Login' primary = {true} style = {style} onClick = { (event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }


    handleClick(event) {
        var apiBaseUrl = 'http://localhost:8000/login/';
        var self = this;
        var payload = {
            'username': this.state.username,
            'senha': this.state.senha
        }

        axios.post(apiBaseUrl, payload)
        .then(function (response){
            console.log(response);

            if (console.data.code == 200){
                console.log('Login realizado')
                var telaUpload = [];

                self.props.appContext.setState({paginaLogin: []})
            }

            else if (response.data.code == 204){
                console.log('Usuário e senha não combinam')
                alert('Usuário e senha não combinam')
            }
            else{
                console.log('Usuário não existe')
                alert('Usuário não existe')

            }
        })
        .catch(function(error){
            console.log(error);
        });
    }
}

const style = {
    margin: 15,
};

export default Login;