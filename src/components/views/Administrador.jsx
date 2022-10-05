import { Container, Table } from "react-bootstrap";
import Item from "../admiProductos/ItemProducto";


const Administrador = () => {
    return (
        <Container>
            <h1 className="display-3 text-center mt-4">Productos disponibles</h1>
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