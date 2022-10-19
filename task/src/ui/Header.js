import React from "react";
import { Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar
        style={{
          justifyContent: "flex-end",
        }}
      >
        <Row style={{ paddingRight: "70%", width: "100%", marginLeft: "10px" }}>
          <Form className="d-flex" style={{ width: "100%" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Row>
        <Row style={{ marginRight: "10px" }}>
          <div style={{ alignItems: "center", padding: " 0 15px 0" }}>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              style={{ height: "50px", width: "50px", borderRadius: "50px" }}
            />
          </div>
          <div style={{ marginleft: "55px", top: 0 }}>User Name</div>
        </Row>
      </Navbar>
    </div>
  );
};

export default Header;
