import { Component } from 'react';
import VacinaDataService from '../../services/vacina.service';

export default class DeleteVacina extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        VacinaDataService.delete(this.props.match.params.id)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });

        this.props.history.push("/vacinas")
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h4 align="center">Deletar vacina?</h4>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div align="center">
                        <input type="submit" value="Confirmar" className="btn btn-danger btn-sm" />
                    </div>
                </form>
            </div>
        )
    }
}