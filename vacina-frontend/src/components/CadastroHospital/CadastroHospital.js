import React, {Component} from 'react'
import { Container, Header } from 'semantic-ui-react'
import FormCadastroHospital from './FormCadastroHospital'

export default class CadastroHospital extends Component{
    render(){
        return(
        <Container>
            <Header as='h3' textAlign>
            Cadastro
            </Header>
        </Container>
        );
    }
}