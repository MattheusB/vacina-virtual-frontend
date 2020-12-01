import React, { Component } from 'react';
import VacinaDataService from '../services/vacina.service';

export default class CreateVacina extends Component {
    constructor(props) {
        super(props);

        this.onChangeCodigo = this.onChangeCodigo.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeDosagem = this.onChangeDosagem.bind(this);
        this.saveVacina = this.saveVacina.bind(this);
        this.newVacina = this.newVacina.bind(this);

        this.state = {
            id: null,
            codigo: '',
            nome: '',
            dosagem: '',
            
            submitted: false
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
    
    saveVacina() {
        var data = {
            codigo: this.state.codigo,
            nome: this.state.nome,
            dosagem: this.state.dosagem
        };
    
        VacinaDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    codigo: response.data.codigo,
                    nome: response.data.nome,
                    dosagem: response.data.dosagem,
    
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    
    newVacina() {
        this.setState({
            id: null,
            codigo: "",
            nome: "",
            dosagem: false,

            submitted: false
        });
    }

    render() {
        return (
            <form>
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button class="btn btn-success" onClick={this.newVacina}>
                            Adicionado
                        </button>
                    </div>
                ) : (
                    <div>
                        <div class="form-group">
                            <label for="codigo">Código: </label>
                            <input  type="text" 
                                    class="form-control"
                                    value={this.state.codigo}
                                    onChange={this.onChangeCodigo}
                                    id="codigo"
                                    name="codigo"
                                    required
                                    />
                        </div>
                        <div class="form-group">
                            <label for="nome">Nome: </label>
                            <input  type="text" 
                                    class="form-control"
                                    value={this.state.nome}
                                    onChange={this.onChangeNome}
                                    id="nome"
                                    name="nome"
                                    required
                                    />
                        </div>
                        <div class="form-group">
                            <label for="dosagem">Dosagem (ml): </label>
                            <input  type="number"
                                    class="form-control"
                                    value={this.state.dosagem}
                                    onChange={this.onChangeDosagem}
                                    id="dosagem"
                                    name="dosagem"
                                    required
                                    />
                        </div>
                        <button onClick={this.saveVacina} class="btn btn-success">
                            Cadastrar
                        </button>
                    </div>
                )}
            </form>
        );
    }
}