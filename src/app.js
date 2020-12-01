import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateVacina from "./components/create-vacina.component";
import UpdateVacina from "./components/update-vacina.component";
import ListVacinas from "./components/list-vacinas.component";

import logo from "./icone-vacina.png";

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a class="navbar-brand" href="/vacina-virtual" target="_blank">
                        <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                    </a>
                    <Link to="/" className="navbar-brand">Vacina Virtual</Link>
                    <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/vacinas" className="nav-link">Vacinas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Cadastrar vacina</Link>
                            </li>
                    </div>
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/vacinas"]} component={ListVacinas} />
                        <Route exact path="/create" component={CreateVacina} />
                        <Route path="/vacina/:id" component={UpdateVacina} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;