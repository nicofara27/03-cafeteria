import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Benito Santos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink to="/" className="nav-item nav-link">
              Inicio
            </NavLink>
            <NavLink to="/administrar" className="nav-item nav-link">
              Administrar
            </NavLink>
            <NavLink to="/ingresar" className="nav-item nav-link ms-0 ms-lg-4">
              Iniciar sesion
            </NavLink>
            <NavLink to="/registro" className="nav-item nav-link">
              Registrarse
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
