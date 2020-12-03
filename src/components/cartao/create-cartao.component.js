import React, { Component } from 'react';
import CartaoDataService from '../../services/cartao.service';

export default class CreateCartao extends Component {
    constructor(props) {
        super(props);

        this.onChangeSus = this.onChangeSus.bind(this);
        this.onChangeCPF = this.onChangeCPF.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeNascimento = this.onChangeNascimento.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            sus: '',
            cpf: '',
            nome: '',
            nascimento: ''
        }
    }

    onChangeSus(e) {
        this.setState({
            sus: e.target.value
        });
    }

    onChangeCPF(e) {
        this.setState({
            cpf: e.target.value
        });
    }

    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }

    onChangeNascimento(e) {
        this.setState({
            nascimento: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();

        console.log(`Cartão cadastrado:`);
        console.log(`SUS: ${this.state.sus}`);
        console.log(`CPF: ${this.state.cpf}`);
        console.log(`Nome: ${this.state.nome}`);
        console.log(`Nascimento: ${this.state.nascimento}`);

        var data = {
            sus: this.state.sus,
            cpf: this.state.cpf,
            nome: this.state.nome,
            nascimento: this.state.nascimento
        };

        CartaoDataService.create(data)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });
        
        this.setState({
            sus: '',
            cpf: '',
            nome: '',
            nascimento: ''
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h4 align="center">Cadastrar cartão</h4>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <div className="form-group">
                            <label htmlFor="sus">SUS: </label>
                            <input  type="text" 
                                    className="form-control"
                                    value={this.state.sus}
                                    onChange={this.onChangeSus}
                                    id="sus"
                                    name="sus"
                                    required
                                    minLength="15"
                                    maxLength="15"
                                    />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpf">CPF: </label>
                            <input  type="text" 
                                    className="form-control"
                                    value={this.state.cpf}
                                    onChange={this.onChangeCPF}
                                    id="cpf"
                                    name="cpf"
                                    required
                                    minLength="11"
                                    maxLength="11"
                                    />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nome">Nome: </label>
                            <input  type="text" 
                                    className="form-control"
                                    value={this.state.nome}
                                    onChange={this.onChangeNome}
                                    id="nome"
                                    name="nome"
                                    required
                                    />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nascimento">Nascimento: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.nascimento}
                                    onChange={this.onChangeNascimento}
                                    id="nascimento"
                                    name="nascimento"
                                    required
                                    minLength="8"
                                    maxLength="8"
                                    />
                        </div>
                        <div align="center">
                            <input type="submit" value="Cadastrar" className="btn btn-primary btn-sm" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}