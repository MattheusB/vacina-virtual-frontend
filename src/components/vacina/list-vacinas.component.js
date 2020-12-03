import React, { Component } from 'react';
import VacinaDataService from '../../services/vacina.service';
import { Link } from "react-router-dom";

const Vacina = props => (
    <tr>
        <td>{props.vacina.codigo}</td>
        <td>{props.vacina.nome}</td>
        <td>{props.vacina.dosagem}</td>
        <td>
            <div className="row">
                <div className="col-md-3">
                    <Link to={"/vacina/update/" + props.vacina._id}>
                        <button type="button" className="btn btn-warning btn-sm">Editar</button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to={"/vacina/delete/" + props.vacina._id}>
                        <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                    </Link>
                </div>
            </div>
        </td>
    </tr>
)

export default class ListVacinas extends Component {
    constructor(props) {
        super(props);
        this.state = { vacinas: [] };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.removeAllVacinas = this.removeAllVacinas.bind(this);
        this.getAllVacinas = this.getAllVacinas.bind(this);
        this.listVacinas = this.listVacinas.bind(this);
    }

    componentDidMount() {
       this.getAllVacinas();
    }

    getAllVacinas() {
        VacinaDataService.getAll()
            .then(res => {
                this.setState({ vacinas: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    listVacinas() {
        return this.state.vacinas.map(function (vac, id) {
            return <Vacina vacina={vac} key={id} />;
        })
    }

    removeAllVacinas() {
        VacinaDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.getAllVacinas();
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h4>Lista de vacinas</h4>
                <br></br>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Dosagem (ml)</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listVacinas()}
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-md-1">
                        <Link to="/vacina/create">
                            <button className="btn btn-primary btn-sm">Cadastrar</button>
                        </Link>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark btn-sm" onClick={this.removeAllVacinas}>Remover vacinas</button>
                    </div>
                </div>
            </div>
        )
    }
}