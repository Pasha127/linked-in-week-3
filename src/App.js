import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import './App.css';

import { Col, Container, Row } from 'react-bootstrap';

import LeftDownSideBar from './components/LeftDownSideBar';

import FooterRightSide from './components/FooterRightSide';
import AddPost from './components/AddPost';
import LeftSideBar from './components/LeftSideBar';

function App() {
  return (
    <div className="App">
       <NavBar/>
    <Container>
      <Row>
      <Col>
      <AddPost />
      <LeftSideBar />
      <LeftDownSideBar/>
      <FooterRightSide/>
       </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
