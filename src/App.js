import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import FormSubmitted from './pages/FormSubmitted';
import PaymentDone from './pages/PaymentDone';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
// import react router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import react bootstrap component
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [customer, setCustomer] = useState({});

  const baseUrl = 'http://localhost:8888/api/';
  // use effecto to check if customer is logged in
  useEffect(() => {
    const checkCustomer = async () => {
      try {
        let response = await axios.get(baseUrl + 'customer/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setCustomer(response.data);
        setLoginStatus(true);
      } catch (e) {
        console.log(e.message, 'customer is not logged in');
      }
    };
    checkCustomer();
  }, [loginStatus]
  )

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Book Hourly Room</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <LinkContainer to='/login' >
                  <NavDropdown.Item>Login</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/register' >
                  <NavDropdown.Item>Register</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/profile' >
                  <NavDropdown.Item>My Profile</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Navbar.Text>
              {
                loginStatus ? 
                <a href="/profile">Hello, {customer.firstName} {customer.lastName} </a>
                : <a href="/login" >Log Into Your Account To Make Payment</a>
              }
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/form-submitted' element={<FormSubmitted />} />
        <Route exact path='/payment-done' element={<PaymentDone />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
