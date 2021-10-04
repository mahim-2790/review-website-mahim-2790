import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar className="fw-bold fs-4">
                        <NavLink to="/home" className="text-decoration-none p-2 me-3  text-light">Musicians Hub</NavLink>
                    </Navbar>
                    <Navbar.Toggle aria-controls="navbarScroll" className="text-light" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', color: 'white' }}
                            navbarScroll
                        >
                            <NavLink to="/home" className="text-decoration-none p-2 me-3  text-light">Home</NavLink>
                            <NavLink to="/services" className="text-decoration-none p-2 me-3 text-light ">Service</NavLink>
                            <NavLink to="/about" className="text-decoration-none p-2 me-3 text-light ">About</NavLink>
                            <NavLink to="/mycourses" className="text-decoration-none p-2 me-3 text-light ">My Courses</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;