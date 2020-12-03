import React, { Component } from 'react';
import VacinaDataService from '../../services/vacina.service';

export default class CreateVacina extends Component {
    constructor(props) {
        super(props);

        this.onChangeCodigo = this.onChangeCodigo.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeDosagem = this.onChangeDosagem.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            codigo: '',
            nome: '',
            dosagem: ''
        }
    }

    onChangeCodigo(e) {
        this.setState({
            codigo: e.target.value
        });
    }

    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }

    onChangeDosagem(e) {
        this.setState({
            dosagem: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();

        console.log(`Vacina cadastrada:`);
        console.log(`Código: ${this.state.codigo}`);
        console.log(`Nome: ${this.state.nome}`);
        console.log(`Dosagem: ${this.state.dosagem}`);

        var data = {
            codigo: this.state.codigo,
            nome: this.state.nome,
            dosagem: this.state.dosagem
        };

        VacinaDataService.create(data)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });
        
        this.setState({
            codigo: '',
            nome: '',
            dosagem: ''
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h4 align="center">Cadastrar vacina</h4>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <div className="form-group">
                            <label htmlFor="codigo">Código: </label>
                            <input  type="text" 
                                    className="form-control"
                                    value={this.state.codigo}
                                    onChange={this.onChangeCodigo}
                                    id="codigo"
                                    name="codigo"
                                    required
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
                            <label htmlFor="dosagem">Dosagem (ml): </label>
                            <input  type="number"
                                    className="form-control"
                                    value={this.state.dosagem}
                                    onChange={this.onChangeDosagem}
                                    id="dosagem"
                                    name="dosagem"
                                    required
                                    min="0"
                                    max="100"/>
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