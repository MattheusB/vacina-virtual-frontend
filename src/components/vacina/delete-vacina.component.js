import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import VacinaDataService from '../../services/vacina.service';

export default class DeleteVacina extends Component {
    constructor(props) {
        super(props);

        this.deleteVacina = this.deleteVacina.bind(this);
        this.voltar = this.voltar.bind(this);
    }

    deleteVacina() {
        VacinaDataService.delete(this.props.match.params.id)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });

        this.props.history.push("/vacinas")
    }

    voltar() {
        this.props.history.push("/vacinas")
    }

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton onClick={this.voltar}>
                    <Modal.Title>Excluir vacina</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Confirmar exclusão?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.voltar} variant="btn btn-secondary btn-sm">Fechar</Button>
                    <Button onClick={this.deleteVacina} variant="btn btn-danger btn-sm">Excluir</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}