import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import HospitalDataService from '../../services/hospital.service';

export default class DeleteHospital extends Component {
    constructor(props) {
        super(props);

        this.deleteHospital = this.deleteHospital.bind(this);
        this.voltar = this.voltar.bind(this);
    }
    
    deleteHospital() {
        HospitalDataService.delete(this.props.match.params.id)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });

        this.props.history.push("/hospitais")
    }

    voltar() {
        this.props.history.push("/hospitais")
    }

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton onClick={this.voltar}>
                    <Modal.Title>Excluir hospital</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Confirmar exclusão?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.voltar} variant="btn btn-secondary btn-sm">Fechar</Button>
                    <Button onClick={this.deleteHospital} variant="btn btn-danger btn-sm">Excluir</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}