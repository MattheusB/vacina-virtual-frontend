import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./icone-vacina.png";
import VacinaVirtual from "./components/vacina-virtual.component";
import CreateVacina from "./components/vacina/create-vacina.component";
import UpdateVacina from "./components/vacina/update-vacina.component";
import ListVacinas from "./components/vacina/list-vacinas.component";
import DeleteVacina from "./components/vacina/delete-vacina.component";

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
                            <Link to="/vacina/create" className="nav-link">Cadastrar vacina</Link>
                        </li>
                    </div>
                </nav>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path="/vacina-virtual" component={VacinaVirtual} />
                        <Route exact path="/vacinas" component={ListVacinas} />
                        <Route exact path="/vacina/create" component={CreateVacina} />
                        <Route path="/vacina/update/:id" component={UpdateVacina} />
                        <Route path="/vacina/delete/:id" component={DeleteVacina} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;