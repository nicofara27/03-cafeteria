
import { Button } from "react-bootstrap";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

// opcion 2
// const ItemProducto = ({id, nombreProducto, categoria, imagen, precio}) => {
// opcion 3
const ItemProducto = ({producto, setProductos}) => {
const {_id, nombreProducto, categoria, imagen, precio} = {...producto} 

const borrarProducto = ()=> {
  borrarProductoAPI(_id).then((respuesta)=> {
    if(respuesta.status === 200) {
      Swal.fire("Producto eliminado","El producto fue eliminado exitosamente", "success")
      //Obtener todos los productos actuales y actualizamos el state productos
      consultarAPI().then((respuesta)=>{
        setProductos(respuesta)
      })
    } else {
      Swal.fire("Ocurrio un error","Vuelva a intentar la operacion mas tarde", "error")
    }
  })
}

  return (
    <tr>
      <td>{_id}</td>
      {/* <td>{props.producto.nombreProducto}</td> */}
      {/* <td>{producto.nombreProducto}</td> */}
      <td>{nombreProducto}</td>
      <td>${precio}</td>
      <td>{imagen}</td>
      <td>{categoria}</td>
      <td>
        <Link className="btn btn-warning" to={`/administrar/editar/${_id}`}>
          Editar
        </Link>
        <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
