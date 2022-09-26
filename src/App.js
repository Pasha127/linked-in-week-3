import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import './App.css';

import { Col, Container, Row } from 'react-bootstrap';

import LeftDownSideBar from './components/LeftDownSideBar';
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="App">
       <NavBar/>
    <Container>
      <Row>
      <Col>
      <LeftDownSideBar/>
      <AddPost/>
       </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;