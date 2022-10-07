import React, { useState } from "react";
import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";

const NavBar = ({ filterBySearch }) => {
  const [textSearch, setText] = useState("");
  const onSearch = () => {
    filterBySearch(textSearch);

  };
  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم الحسن</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                onChange={(e) => setText(e.target.value)}
                placeholder="ابحت من هنا"
                className="mx-2"
                aria-label="Search"
                value={textSearch}
              />
              <button onClick={onSearch} className="btn-search">
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
