import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useHistory } from 'react-router';

function NavBar() {
    const history = useHistory();


    return (
        <React.Fragment>
            <div className="header">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top:-10px">
                    <Container>
                        <Navbar.Brand href="/StudentHomePage">QUIZ</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link href="/StudentHomePage"> Student HomePage </Nav.Link> */}
                                <Nav.Link href="/QuizList">Quiz List</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </React.Fragment>
    )
}

export default NavBar
