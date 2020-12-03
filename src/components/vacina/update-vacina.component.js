import React, { Component } from 'react';
import VacinaDataService from '../../services/vacina.service';

export default class UpdateVacina extends Component {
    constructor(props) {
        super(props);

        this.onChangeCodigo = this.onChangeCodigo.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeDosagem = this.onChangeDosagem.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            codigo: '',
            nome: '',
            dosagem: ''
        }
    }
    
    componentDidMount() {
        VacinaDataService.get(this.props.match.params.id)
            .then(res => {
                this.setState({
                    codigo: res.data.codigo,
                    nome: res.data.nome,
                    dosagem: res.data.dosagem
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

        var data = {
            codigo: this.state.codigo,
            nome: this.state.nome,
            dosagem: this.state.dosagem
        };

        VacinaDataService.update(this.props.match.params.id, data)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });
        
        this.props.history.push("/vacinas")
    }
    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h4 align="center">Atualizar vacina</h4>
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
                        <input type="submit" value="Atualizar" className="btn btn-primary btn-sm" />
                    </div>
                </form>
            </div>
        )
    }
}