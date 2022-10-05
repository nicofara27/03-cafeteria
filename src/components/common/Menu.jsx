import { Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar variant="dark" bg="danger" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Cafeteria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Aministrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
