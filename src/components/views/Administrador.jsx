import { Container, Table, Button } from "react-bootstrap";
import Item from "../admiProductos/ItemProducto";


const Administrador = () => {
    return (
        <Container className="mainSection">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-3 text-center">Productos disponibles</h1>
            <Button>Agregar</Button>
          </div>
            <hr />
            <Table striped bordered hover responsive>
      <thead>
        <tr className="fw-semibold">
          <th>Cod</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <Item></Item>
      </tbody>
    </Table>
        </Container>
    );
};

export default Administrador;