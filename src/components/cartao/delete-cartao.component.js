import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CartaoDataService from '../../services/cartao.service';

export default class DeleteCartao extends Component {
    constructor(props) {
        super(props);

        this.deleteCartao = this.deleteCartao.bind(this);
        this.voltar = this.voltar.bind(this);
    }
    
    deleteCartao() {
        CartaoDataService.delete(this.props.match.params.id)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });

        this.props.history.push("/cartoes")
    }

    voltar() {
        this.props.history.push("/cartoes")
    }

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton onClick={this.voltar}>
                    <Modal.Title>Excluir cartão</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Confirmar exclusão?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.voltar} variant="btn btn-secondary btn-sm">Fechar</Button>
                    <Button onClick={this.deleteCartao} variant="btn btn-danger btn-sm">Excluir</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}