import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ContainerSection from './pages/containerSection';

import './styles/App.css';

const img = require('./assets/ateliware_logo.jpg');

const AlertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.FADE
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...AlertOptions}>

          <Card>
            <Card.Body>
              <Row>
                <Col md={12}>
                  <Row className="mb-2 logo-row">
                    <Col className="text-center" md={12}>
                      <h1 id="LogoBest"><b>BestRepos</b></h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="description text-center" md={12}>
                      <p><b>Olá! Bem-vindo à nossa aplicação.</b></p>
                      <p>Nela você pode pesquisar os mais famosos repositórios do Github
                        de acordo com a linguagem de programação.</p>
                      <p>É fácil, basta selecionar a linguagem de programação e clicar em <b>Buscar.</b></p>
                    </Col>
                  </Row>
                  <Row className="mb-2 mt-2">
                    <Col md={12}>
                      <ContainerSection />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>

        </AlertProvider>
      </Provider >
    </div>


  );
}

export default App;
