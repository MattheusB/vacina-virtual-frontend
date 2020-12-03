import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartaoDataService from '../../services/cartao.service';

export default class ListVacinasCartao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            vacinas: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.getVacinasCartao = this.getVacinasCartao.bind(this);
    }

    componentDidMount() {
       this.getVacinasCartao();
    }

    getVacinasCartao() {
        CartaoDataService.getVacinasCartao(this.props.match.params.id)
            .then(res => {
                this.setState({ 
                    nome: res.data.nome,
                    vacinas: res.data.vacinas
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { vacinas, nome } = this.state;
        return (
            <div style={{ marginTop: 10 }}>
                <h4>Lista de vacinas do cartão</h4>
                <br></br>
                Paciente: {nome}
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Vacinas tomadas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vacinas.map((vacina, index) => (
                            <ul key={index}>
                                <li>
                                    {vacina}
                                </li>
                            </ul>
                        ))}
                    </tbody>
                </table>
                <div align="center">
                    <Link to={"/cartao/" + this.props.match.params.id + "/vacinar"}>
                        <button className="btn btn-primary btn-sm">Vacinar</button>
                    </Link>
                </div>
            </div>
        )
    }
}