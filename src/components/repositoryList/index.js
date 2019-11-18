import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import RepositoryDetails from '../repositoryDetails';
import LanguageBadge from '../languageBadge';
import './styles.css';

export default function RepositoryList(props) {
    const currentSectionKey = useSelector(state => state.menuState.current_menu_key);

    const renderMessage = () => {
        switch (currentSectionKey) {
            case "SEARCH_PAGE":
                return (
                    <Col className="text-center" xs={12}>
                        <p>Parece que você ainda não pesquisou nada... Que tal fazer uma pesquisa?</p>
                        <p>É só selecionar a linguagem de programação e clicar no botão <b>Buscar</b>!</p>
                    </Col>
                );

            case "REPO_HISTORY":
                return (
                    <Col className="text-center" xs={12}>
                        <p>Parece que você ainda não pesquisou nada... Que tal fazer uma pesquisa?</p>
                        <p>No menu <b>Pesquisar repositórios</b>, é só selecionar a linguagem de programação e clicar no botão <b>Buscar</b>!</p>
                    </Col>
                );

            default:
                return (
                    <Col className="text-center" xs={12}>
                        <p>Parece que você ainda não pesquisou nada... Que tal fazer uma pesquisa?</p>
                    </Col>
                );
        }
    }

    if (props.data && props.data.length !== 0) {
        return (
            <Row>
                {
                    props.data.map((element) => {
                        return (
                            <Col className="card-col text-center mt-3" key={element.id.toString()} md={4} xs={12}>
                                <Card style={{ height: '100%', width: '100%' }}>
                                    <Card.Header>
                                        <b>{element.name}</b>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row className="mt-1 mb-2">
                                            <Col md={12}>
                                                <a href={element.html_url} target="_blank" rel="noopener noreferrer">
                                                    <OverlayTrigger
                                                        key={'tooltip-top'}
                                                        placement={'top'}
                                                        delay={{ show: 130, hide: 280 }}
                                                        overlay={
                                                            <Tooltip>
                                                                <b>Me leve pra esse repositório!</b>
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <img className="avatar-img" border="0" src={element.owner.avatar_url} alt="avatar_logo" />
                                                    </OverlayTrigger>
                                                </a>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} className="text-center">
                                                <LanguageBadge language={element.language} />
                                            </Col>
                                        </Row>
                                        <RepositoryDetails repository={element} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        );

    } else {
        return (
            <Row>
                {
                    renderMessage()
                }
            </Row>
        );
    }

}
