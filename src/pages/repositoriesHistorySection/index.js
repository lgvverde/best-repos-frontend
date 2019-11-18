import React, { useState, useEffect } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import RepositoryList from '../../components/repositoryList';
import Loader from 'react-loader-spinner';
import * as api from '../../api';
import { useAlert } from 'react-alert';

import './styles.css';

export default function RepositoriesHistorySection() {
  const [repositoriesHistoryState, setRepositoriesHistoryState] = useState({ isLoading: false });
  const alert = useAlert();

  useEffect( () => {
    async function fetchData() {
      await setRepositoriesHistoryState({ isLoading: true })
      await api.getRepositoriesHistory()
        .then(function(response){
          setRepositoriesHistoryState({isLoading: false, repositories: response.data});
        })
        .catch(function(error){
          alert.show('Erro: ' + error, {
            timeout: 3000,
            type: 'error',
          })
        })
    }

    fetchData();
  }, []);

  const handleClearButton = async () => {
      await setRepositoriesHistoryState({ isLoading: true })
      await api.clearRepositoriesHistory()
      .then(function(){
        setRepositoriesHistoryState({});
        alert.show('O histórico foi limpo!', {
            timeout: 3000,
            type: 'success',
        })
      })
      .catch(function(error){
        alert.show('Erro: ' + error, {
          timeout: 3000,
          type: 'error',
        })
      })
  }

  function renderContent(){
    if(repositoriesHistoryState.isLoading){
        return (
            <Row className="mt-4">
                <Col className="text-center" xs={12}>
                <Loader
                    type="BallTriangle"
                    color="#dc3545"
                    height={150}
                    width={150}
                    timeout={3000}
                />
                </Col>
            </Row>                
        );
    }else{
        return(
            <Row className="mt-2" id="RepositoryList">
            <Col md={12} xs={12}>
                <RepositoryList data={repositoriesHistoryState.repositories} />
            </Col>
            </Row>
        );
    }
}

  return (
    <>
      <Row>
        <Col className="text-center" md={12} xs={12} >
          <Button className="search-button" variant="info" onClick={handleClearButton}>Limpar Histórico</Button>
        </Col>
      </Row>
      {renderContent()}
    </>
  );
}
