import React, {Component} from 'react'
import { MuiThemeProvider } from "material-ui/styles";
import { AppBar, TextField } from "material-ui";
import RaisedButton from "../../../../node_modules/material-ui/RaisedButton/RaisedButton";

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
}

const style = {
    margin: 15,
};

export default Login;