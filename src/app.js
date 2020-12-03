import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./icone-vacina.png";
import VacinaVirtual from "./components/vacina-virtual.component";
import CreateVacina from "./components/vacina/create-vacina.component";
import CreateCartao from "./components/cartao/create-cartao.component";
import CreateHospital from "./components/hospital/create-hospital.component";
import UpdateVacina from "./components/vacina/update-vacina.component";
import UpdateCartao from "./components/cartao/update-cartao.component";
import UpdateHospital from "./components/hospital/update-hospital.component";
import DeleteVacina from "./components/vacina/delete-vacina.component";
import DeleteCartao from "./components/cartao/delete-cartao.component";
import DeleteHospital from "./components/hospital/delete-hospital.component";
import ListVacinas from "./components/vacina/list-vacinas.component";
import ListCartoes from "./components/cartao/list-cartoes.component";
import ListHospitais from "./components/hospital/list-hospitais.component";
import ListVacinasCartao from "./components/cartao/list-vacinas-cartao.component";
import Vacinar from "./components/cartao/vacinar.component";

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a className="navbar-brand" href="/vacina-virtual" target="_blank">
                        <img src={logo} width="30" height="30" alt="canoas.rs.gov.br/servicos/vacinacaoemcanoas" />
                    </a>
                    <Link to="/vacina-virtual" className="navbar-brand">Vacina Virtual</Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/vacinas" className="nav-link">Vacinas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cartoes" className="nav-link">Cartões</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hospitais" className="nav-link">Hospitais</Link>
                        </li>
                    </div>
                </nav>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path="/vacina-virtual" component={VacinaVirtual} />
                        <Route exact path="/vacina/create" component={CreateVacina} />
                        <Route exact path="/cartao/create" component={CreateCartao} />
                        <Route exact path="/hospital/create" component={CreateHospital} />
                        <Route path="/vacina/update/:id" component={UpdateVacina} />
                        <Route path="/cartao/update/:id" component={UpdateCartao} />
                        <Route path="/hospital/update/:id" component={UpdateHospital} />
                        <Route path="/vacina/delete/:id" component={DeleteVacina} />
                        <Route path="/cartao/delete/:id" component={DeleteCartao} />
                        <Route path="/hospital/delete/:id" component={DeleteHospital} />
                        <Route exact path="/vacinas" component={ListVacinas} />
                        <Route exact path="/cartoes" component={ListCartoes} />
                        <Route exact path="/hospitais" component={ListHospitais} />
                        <Route path="/cartao/:id/vacinas" component={ListVacinasCartao} />
                        <Route path="/cartao/:id/vacinar" component={Vacinar} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;