import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
library.add(faTasks);

const NavBar = ({name, links}) => {

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/home">{name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/addtodo">Add a new to do list</Nav.Link>                    
                    <NavDropdown title="toDos" id="collasible-nav-dropdown">
                        {
                            links.map((item) => {
                                return <NavDropdown.Item href={item}>{item}</NavDropdown.Item>
                            })
                        }
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
}

export default NavBar