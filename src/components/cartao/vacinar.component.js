import React, { Component } from 'react';
import CartaoDataService from '../../services/cartao.service';

export default class Vacinar extends Component {
    constructor(props) {
        super(props);

        this.onChangeCodigo = this.onChangeCodigo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            codigo: '',
        }
    }

    onChangeCodigo(e) {
        this.setState({
            codigo: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Vacina cadastrada no cartão:`);
        console.log(`Código: ${this.state.codigo}`);

        var data = {
            codigo: this.state.codigo,
        };

        CartaoDataService.vacinar(this.props.match.params.id, data.codigo)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });
        
        this.setState({
            codigo: ''
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h4 align="center">Cadastrar vacina no cartão</h4>
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
                        <div align="center">
                            <input type="submit" value="Cadastrar" className="btn btn-primary btn-sm" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}