import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar variant="dark" bg="danger" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Cafeteria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-item nav-link">Inicio</NavLink>
            <NavLink to="/administrador" className="nav-item nav-link">Aministrador</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
