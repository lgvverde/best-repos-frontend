import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import SearchSection from '../searchSection';
import RepositoriesHistorySection from '../repositoriesHistorySection';
import * as config from '../../config';

export default function ContainerSection() {
    const currentSectionKey = useSelector(state => state.menuState.current_menu_key);
    const dispatch = useDispatch();

    function handleMenuClick(menuKey){
        dispatch({ type: 'MENU_CHANGED', current_menu_key: menuKey });
    }

    function renderMenuSection(){
        switch(currentSectionKey){
            case "SEARCH_PAGE":
                return <SearchSection />;

            case "REPO_HISTORY":
                return <RepositoriesHistorySection />;

            default:
                return <SearchSection />
        }
    }

  return (
    <>
    <Row>
        <Col md={12}>
            <div className="d-flex flex-column">
                <Menu data={config.MenuList} currentSectionKey={currentSectionKey} onMenuChange={(menuKey) => handleMenuClick(menuKey)} />
            </div>
        </Col>
    </Row>
    <Row className="mt-4">
        <Col md={12}>
           {renderMenuSection()} 
        </Col>
    </Row>
    </>
  );
}

// Componente de menu, declarado já dentro de ContainerSection para melhor manipulação.
// Por se tratar de um componente simples, está localizado dentro do container.
const Menu = (props) => {

    return(
      <ButtonGroup className="flex-wrap">
        {
          props.data.map((menuItem) => {
            return(
                <Button key={menuItem.name} onClick={() => props.onMenuChange(menuItem.key) } variant={menuItem.key === props.currentSectionKey ? "danger" : "light" }>{menuItem.name}</Button>
            );
          })
        }
      </ButtonGroup>
    );
  }
