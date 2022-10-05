import { Container, Row } from "react-bootstrap";
import Producto from "../admiProductos/Producto";


const Inicio = () => {
  return (
    <Container>
      <h1 className="display-3 text-center mt-4">Bienvenidos</h1>
      <hr />
      <Row className="justify-content-around">
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
      </Row>
    </Container>
  );
};

export default Inicio;
