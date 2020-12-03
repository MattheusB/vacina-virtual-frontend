import React, { Component } from 'react';
import HospitalDataService from '../../services/hospital.service';

export default class CreateHospital extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeCNES = this.onChangeCNES.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeCidade = this.onChangeCidade.bind(this);
        this.onChangeUF = this.onChangeUF.bind(this);
        this.onChangeCEP = this.onChangeCEP.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            cnes: '',
            nome: '',
            cidade: '',
            uf: '',
            cep: ''
        }
    }

    onChangeID(e) {
        this.setState({
            id: e.target.value
        });
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

        console.log(`Cartão cadastrado:`);
        console.log(`ID: ${this.state._id}`);
        console.log(`CNES: ${this.state.cnes}`);
        console.log(`Nome: ${this.state.nome}`);
        console.log(`Cidade: ${this.state.cidade}`);
        console.log(`UF: ${this.state.uf}`);
        console.log(`CEP: ${this.state.cep}`);


        var data = {
            _id: this.state.id,
            cnes: this.state.cnes,
            nome: this.state.nome,
            cidade: this.state.cidade,
            uf: this.state.uf,
            cep: this.state.cep
        };

        HospitalDataService.create(data)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });
        
        this.setState({
            id: '',
            cnes: '',
            nome: '',
            cidade: '',
            uf: '',
            cep: ''
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h4 align="center">Cadastrar hospital</h4>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <div className="form-group">
                            <label htmlFor="id">ID: </label>
                            <input  type="text" 
                                    className="form-control"
                                    value={this.state.id}
                                    onChange={this.onChangeID}
                                    id="id"
                                    name="id"
                                    required
                                    />
                        </div>
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
                        <div align="center">
                            <input type="submit" value="Cadastrar" className="btn btn-primary btn-sm" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}