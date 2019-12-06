import React, {Component} from 'react'
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';
import TextField from '../../../../node_modules/material-ui/TextField';
import RaisedButton from '../../../../node_modules/material-ui/RaisedButton';


class CadastroCartao extends Component{
    constructor(props){
        super(props);
        this.state = {
            sus: '',
            cpf: '',
            username: '',
            nascimento: '',
            vacinas: '',
        }
    }

    render() {
        return (
            <div className = 'center'>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title = 'CadastroCartao'
                        />

                        <TextField
                            hintText = 'Digite o número do seu cartão sus'
                            floatingLabelText = 'Número Sus'
                            onChange = {(event, newValue) => 
                                this.setState({sus: newValue})
                            }
                        />
                        <br/>
                        <TextField
                            hintText = 'Digite o seu cpf'
                            floatingLabelText = 'Cpf'
                            onChange = {(event, newValue ) =>
                                this.setState({cpf: newValue})
                            }
                        />
                        <br/>

                        <TextField
                            hintText = 'Digite o seu username'
                            floatingLabelText = 'Username'
                            onChange = {(event, newValue) =>
                                this.setState({username: newValue})
                            }
                        />
                        <br/>

                        <TextField
                            hintText = 'Digite sua data de nascimento'
                            floatingLabelText = 'Data de nascimento'
                            onChange = {(event, newValue) =>
                                this.setState({nascimento: newValue})
                            }
                        />
                        <br/>
                        <br/>

                        <RaisedButton label = 'Cadastrar' primary = {true} syle = {style} 
                        onClick = {(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

const style = {
    margin: 0,
}

export default CadastroCartao;