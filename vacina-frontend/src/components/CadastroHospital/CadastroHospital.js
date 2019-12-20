import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import '../../App.css';
import axios from 'axios';

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


    handleClick(event){
        var apiBaseUrl = 'http://localhost:8000/hospital/';

        console.log('values', this.state.username, this.state.codigo, this.state.senha, this.state.cidade, this.state.uf);

        var self = this;

        var payload = {
            'username': this.state.username,
            'codigo': this.state.codigo,
            'senha': this.state.senha,
            'cidade': this.state.cidade,
            'uf': this.state.uf,
        }

        axios.post(apiBaseUrl, payload)
        .then(function (response) {
            console.log(response);
            if (response.data.code == 200){
                console.log('Cadastro realizado');
                var telaLogin = [];
                telaLogin.push(<Login parentContext/>);
                var mensagemLogin = 'Não é registrado ainda? Registre-se agora.';
                self.props.parentContext.setState({telaLogin: telaLogin,
                mensagemLogin: mensagemLogin,
                tipoBotao: "Cadastro",
                logado: true
            });
            }
        })
        .catch(function(error){
            console.log(error);
        });

    }
}


const style = {
    margin: 0,
}

export default CadastroHospital;