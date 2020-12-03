import React, { Component } from 'react';
import CartaoDataService from '../../services/cartao.service';
import { Link } from "react-router-dom";

const Cartao = props => (
    <tr>
        <td>{props.cartao.sus}</td>
        <td>{props.cartao.cpf}</td>
        <td>{props.cartao.nome}</td>
        <td>{props.cartao.nascimento}</td>
        <td>
            <div className="row">
                <div className="col-md-3">
                    <Link to={"/cartao/update/" + props.cartao._id}>
                        <button type="button" className="btn btn-warning btn-sm">Editar</button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to={"/cartao/delete/" + props.cartao._id}>
                        <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to={"/cartao/" + props.cartao._id + "/vacinas"}>
                        <button type="button" className="btn btn-success btn-sm">Vacinas</button>
                    </Link>
                </div>
            </div>
        </td>
    </tr>
)

export default class ListVacinas extends Component {
    constructor(props) {
        super(props);
        this.state = { cartoes: [] };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleteAllCartoes = this.deleteAllCartoes.bind(this);
        this.getAllCartoes = this.getAllCartoes.bind(this);
        this.listCartoes = this.listCartoes.bind(this);
    }

    componentDidMount() {
       this.getAllCartoes();
    }

    getAllCartoes() {
        CartaoDataService.getAll()
            .then(res => {
                this.setState({ cartoes: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    listCartoes() {
        return this.state.cartoes.map(function (car, id) {
            return <Cartao cartao={car} key={id} />;
        })
    }

    deleteAllCartoes() {
        CartaoDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.getAllCartoes();
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h4>Lista de cartões</h4>
                <br></br>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>SUS</th>
                            <th>CPF</th>
                            <th>Nome</th>
                            <th>Nascimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listCartoes()}
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-md-1">
                        <Link to="/cartao/create">
                            <button className="btn btn-primary btn-sm">Cadastrar</button>
                        </Link>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark btn-sm" onClick={this.deleteAllCartoes}>Remover cartões</button>
                    </div>
                </div>
            </div>
        )
    }
}