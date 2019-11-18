import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { MdStar, MdDescription, MdPerson, MdReportProblem } from 'react-icons/md';
import LanguageBadge from '../languageBadge';

export default function RepositoryDetails(props) {
    const [show, setShow] = useState(props.show);

    const handleClose = () => {
        document.getElementById("RepositoryList").style.overflow = "auto";
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const handleEnter = () => {
        document.getElementById("RepositoryList").style.overflow = "hidden";
    }

    return (
        <>
            <Row>
                <Col className="mt-2" xs={12} md={12}>
                    <Button onClick={handleShow} className="btn btn-block" variant="outline-info">Detalhes</Button>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} onEnter={handleEnter} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <a href={props.repository.html_url} target="_blank" rel="noopener noreferrer">
                            {props.repository.name}
                        </a>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <IconContext.Provider value={{ color: "#dc3545", size: 25 }}>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <Col className="text-center" xs={12}>
                                        <img className="avatar-img" src={props.repository.owner.avatar_url} alt="avatar_logo" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-center" xs={12}>
                                        <LanguageBadge language={props.repository.language} />
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col xs={12}>
                                        <p><MdPerson /><b> Autor: </b>{props.repository.owner.login}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <p><MdStar /><b> Estrelas: </b>{props.repository.stargazers_count}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <p><MdReportProblem /><b> Problemas: </b>{props.repository.open_issues_count}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <p><MdDescription /><b> Descrição: </b>{props.repository.description}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </IconContext.Provider>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


