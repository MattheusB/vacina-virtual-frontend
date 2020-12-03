import React, { Component } from 'react';
import HospitalDataService from '../../services/hospital.service';
import { Link } from "react-router-dom";

const Hospital = props => (
    <tr>
        <td>{props.hospital.cnes}</td>
        <td>{props.hospital.nome}</td>
        <td>{props.hospital.cidade}</td>
        <td>{props.hospital.uf}</td>
        <td>{props.hospital.cep}</td>
        <td>
            <div className="row">
                <div className="col-md-4">
                    <Link to={"/hospital/update/" + props.hospital._id}>
                        <button type="button" className="btn btn-warning btn-sm">Editar</button>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"/hospital/delete/" + props.hospital._id}>
                        <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                    </Link>
                </div>
            </div>
        </td>
    </tr>
)

export default class ListHospitais extends Component {
    constructor(props) {
        super(props);
        this.state = { hospitais: [] };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleteAllHospitais = this.deleteAllHospitais.bind(this);
        this.getAllHospitais = this.getAllHospitais.bind(this);
        this.listHospitais = this.listHospitais.bind(this);
    }

    componentDidMount() {
       this.getAllHospitais();
    }

    getAllHospitais() {
        HospitalDataService.getAll()
            .then(response => {
                this.setState({ hospitais: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    listHospitais() {
        return this.state.hospitais.map(function (hos, id) {
            return <Hospital hospital={hos} key={id} />;
        })
    }

    deleteAllHospitais() {
        HospitalDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.getAllHospitais();
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h4>Lista de hospitais</h4>
                <br></br>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>CNES</th>
                            <th>Nome</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>CEP</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listHospitais()}
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-md-1">
                        <Link to="/hospital/create">
                            <button className="btn btn-primary btn-sm">Cadastrar</button>
                        </Link>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark btn-sm" onClick={this.deleteAllHospitais}>Remover hospitais</button>
                    </div>
                </div>
            </div>
        )
    }
}