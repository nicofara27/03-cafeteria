import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Item from "../admiProductos/ItemProducto";
import { consultarAPI } from "../helpers/queries";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        //La respuesta es exitosa
        setProductos(respuesta);
      },
      (reason) => {
        console.log(reason);
        //Se podria mostrar un mensaje al usuario
        Swal.fire(
          'Ocurrio un error',
          'Intentelo nuevamente en unos minutos',
          'error'
        )
      }
    );
  }, []);

  return (
    <Container className="mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-3 text-center">Productos disponibles</h1>
        <Button as={Link} to="/administrar/crear">
          Agregar
        </Button>
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
