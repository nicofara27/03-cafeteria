import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { consultarAPI } from "../helpers/queries";
import CardProducto from "./admiProductos/CardProducto";

const Inicio = () => {
  let [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        setProductos(respuesta);
      
      },
      (reason) => {
        console.log(reason);

        Swal.fire(
          'Ocurrio un error',
          'Intentelo nuevamente en unos minutos',
          'error'
        )
      }
    );
  }, []);

  return (
    <Container className="my-5 mainSection">
      <h1 className="display-3 text-center">Bienvenidos</h1>
      <hr />
      <section xs={1} md={4} id="productosContainer"> 
        {/* aqui van las columnas */}
        {productos.map((producto)=><CardProducto key={producto.id} producto={producto}></CardProducto>)}    
      </section>
    </Container>
  );
};

export default Inicio;
