import React, { Component } from 'react';
import HospitalDataService from '../../services/hospital.service';

export default class UpdateHospital extends Component {
    constructor(props) {
        super(props);

        this.onChangeCNES = this.onChangeCNES.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeCidade = this.onChangeCidade.bind(this);
        this.onChangeUF = this.onChangeUF.bind(this);
        this.onChangeCEP = this.onChangeCEP.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            cnes: '',
            nome: '',
            cidade: '',
            uf: '',
            cep: ''
        }
    }
    
    componentDidMount() {
        HospitalDataService.get(this.props.match.params.id)
            .then(res => {
                this.setState({
                    cnes: res.data.cnes,
                    nome: res.data.nome,
                    cidade: res.data.cidade,
                    uf: res.data.uf,
                    cep: res.data.cep
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeCNES(e) {
        this.setState({
            cnes: e.target.value
        });
    }

    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }

    onChangeCidade(e) {
        this.setState({
            cidade: e.target.value
        });
    }

    onChangeUF(e) {
        this.setState({
            uf: e.target.value
        });
    }

    onChangeCEP(e) {
        this.setState({
            cep: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        var data = {
            cnes: this.state.cnes,
            nome: this.state.nome,
            cidade: this.state.cidade,
            uf: this.state.uf,
            cep: this.state.cep
        };

        HospitalDataService.update(this.props.match.params.id, data)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });
        
        this.props.history.push("/hospitais")
    }
    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h4 align="center">Atualizar hospital</h4>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <div className="form-group">
                            <label htmlFor="cnes">CNES: </label>
                            <input  type="text" 
                                    className="form-control"
                                    value={this.state.cnes}
                                    onChange={this.onChangeCNES}
                                    id="cnes"
                                    name="cnes"
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
                            <label htmlFor="cidade">Cidade: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.cidade}
                                    onChange={this.onChangeCidade}
                                    id="cidade"
                                    name="cidade"
                                    required
                                    />
                        </div>
                        <div className="form-group">
                            <label htmlFor="uf">UF: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.uf}
                                    onChange={this.onChangeUF}
                                    id="uf"
                                    name="uf"
                                    required
                                    minLength="2"
                                    maxLength="2"
                                    />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cep">CEP: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.cep}
                                    onChange={this.onChangeCEP}
                                    id="cep"
                                    name="cep"
                                    required
                                    minLength="8"
                                    maxLength="8"
                                    />
                        </div>
                        <input type="submit" value="Atualizar" className="btn btn-primary btn-sm" />
                    </div>
                </form>
            </div>
        )
    }
}