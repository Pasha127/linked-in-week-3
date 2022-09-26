import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import './App.css';
import RightSideBar from './components/RightSideBar';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <NavBar/>
    <Container>
      <Row>
      <Col>
       <RightSideBar/>
       </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
