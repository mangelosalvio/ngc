import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Home({ history }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <div className="logo"></div>
      <div className="d-flex align-items-center justify-content-center" 
            style={{ height: "10vh" }}
      >
        <Link to="/business">
          <Button variant="primary" size="lg">
            NEW
          </Button>
        </Link>
        <Link to="/renewal">
          <Button variant="primary" size="lg" style={{ marginLeft: "1rem" }}>
            RENEWAL
          </Button>
        </Link>
      </div>
    </>
  );
}
