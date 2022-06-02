import React from 'react'
import { useAuth0 } from "../react-auth0-spa"
import { Navbar, Button, Nav, NavDropdown, Container } from 'react-bootstrap'




function NavBar() {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const logoutWithRedirect = () => {
      console.log(window.location.origin)
      logout({
        // replace url below with the redirect url after user logs out of your app
        returnTo: `http://localhost:3000`
      })
    };
  
    return (
      <Navbar collapseOnSelect expand="lg">
        <Container className='navbar-container'>
          <Navbar.Brand href="/">
                <b>Habarci</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
        {
          !isAuthenticated && 
          <Nav className="ml-auto">
            <Button onClick={() => loginWithRedirect({})}>Войти</Button>
          </Nav>
        }
        
        {
          isAuthenticated && (   
            <Nav className="ml-auto">
                <Nav>
                    <NavDropdown title="Профиль" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/profile">Профиль</NavDropdown.Item>
                        <NavDropdown.Item href="/jobsaccepted">Перевозки</NavDropdown.Item>
                        <NavDropdown.Item href="/jobsposted">Закази</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/joblistings">Список заказов</Nav.Link>
                    <Nav.Link href="/schedulejobs">Создать заказ</Nav.Link>
                </Nav>
                <Nav>
                    <Button onClick={() => logoutWithRedirect()}>Выйти</Button>
                </Nav>
            </Nav>
          )}       
          </Navbar.Collapse>
          </Container>
      </Navbar>
    );
  };



export default NavBar