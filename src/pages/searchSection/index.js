import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LanguageSelect from '../../components/languageSelect';
import RepositoryList from '../../components/repositoryList';
import * as api from '../../api';
import * as config from '../../config';

import './styles.css';

export default function SearchSection() {
    const [searchSectionState, setSearchSectionState] = useState({ isLoading: false });
    const selectedLanguage = useSelector(state => state.languageSelectState.selectedLanguage);
    const searchData = useSelector(state => state.searchState.searchData);
    const dispatch = useDispatch();
    const alert = useAlert();

    function handleSearchButtonClick() {
        if (selectedLanguage) {
            async function fetchData() {
                try {
                    setSearchSectionState({ isLoading: true });
                    const gitResponse = await api.getGitRepositories(selectedLanguage.value);
                    const repositories = gitResponse.data.items.slice(0, config.MAX_ITEMS_SEARCH);
                    await api.storeRepositories(repositories);
                    dispatch({ type: 'SEARCH_CHANGED', searchData: repositories });
                    setSearchSectionState({ isLoading: false });
                } catch (err) {
                    setSearchSectionState({ isLoading: false });
                    alert.show('Erro: ' + err, {
                        timeout: 3000,
                        type: 'error',
                    })
                }


            }
            fetchData();
        } else {
            alert.show('Oops! Você precisa selecionar uma linguagem de programação.', {
                timeout: 3000,
                type: 'error',
                onOpen: () => {
                    console.log('Usuário não selecionou linguagem de programação')
                },
                onClose: () => {
                    // Handler
                }
            })
        }

    }

    function renderContent(){
        if(searchSectionState.isLoading){
            return (
                <Row className="mt-4">
                    <Col className="text-center" xs={12}>
                    <Loader
                        type="BallTriangle"
                        color="#dc3545"
                        height={150}
                        width={150}
                    />
                    </Col>
                </Row>
            );
        }else{
            return(
                <Row className="mt-2" id="RepositoryList">
                <Col md={12} xs={12}>
                    <RepositoryList data={searchData} />
                </Col>
                </Row>
            );
        }
    }

    return (
        <>
            <Row>
                <Col md={10} xs={12} >
                    <LanguageSelect />
                </Col>
                <Col className="text-center" md={2} xs={12} >
                    <Button className="search-button" variant="info" onClick={() => handleSearchButtonClick()}>Buscar</Button>
                </Col>
            </Row>
            { renderContent() }
        </>
    );


}
