import React, { useState } from "react";
import logo from "./logo.svg";
import setAxiosHeader from "./setAxiosHeader";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BusinessForm from "./BusinessForm";
import Home from "./Home";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import BusinessRenewalForm from "./BusinessRenewalForm";

setAxiosHeader();

function App() {
  const [name, setName] = useState("");

  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">BPLO</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link href="#features">
            <Link to="/business">New Business</Link>
          </Nav.Link>
          <Nav.Link href="#renewal">
            <Link to="/renewal">Renewal</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Row className="m-t-1">
          <Col>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/business" exact>
                <BusinessForm />
              </Route>
              <Route path="/renewal" exact>
                <BusinessRenewalForm />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
