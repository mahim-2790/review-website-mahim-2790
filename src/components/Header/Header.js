import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar className="fw-bold fs-4">
                        <NavLink to="/home" className="text-decoration-none p-2 me-3  text-light">Musicians Hub</NavLink>
                    </Navbar>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/home" className="text-decoration-none p-2 me-3  text-light">Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none p-2 me-3 text-light ">About</NavLink>
                            <NavLink to="/services" className="text-decoration-none p-2 me-3 text-light ">Service</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;