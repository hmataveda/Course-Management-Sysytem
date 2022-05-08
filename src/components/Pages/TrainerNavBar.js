import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router";

function TrainerNavBar() {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="container">
        <div className="header">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            fixed="top:-10px"
          >
            <Container>
              <Navbar.Brand href="/TrainerHomePage">QUIZ</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  {/* <Nav.Link href="/TrainerHomePage">Trainer Site</Nav.Link> */}
                  <Nav.Link href="/Viewquiz">View Quiz</Nav.Link>
                </Nav>
               </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TrainerNavBar;
