import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Registro from "./components/views/Registro";
import InicioSesion from "./components/views/InicioSesion";
import Administrador from "./components/views/Administrador";
import Error404 from "./components/views/Error404";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/admiProductos/CrearProducto";
import EditarProducto from "./components/views/admiProductos/EditarProducto";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import './app.css'

function App() {
  return (
    // administramos las rutas
    <BrowserRouter>
      {/* aqui pongo un componente que aparece en todas las paginas */}
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/ingresar"
          element={<InicioSesion></InicioSesion>}
        ></Route>
        <Route
          exact
          path="/registro"
          element={<Registro></Registro>}
        ></Route>
        <Route
          exact
          path="/administrar"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administrar/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/administrar/editar/:id"  //Los dos puntos significan que luego de estos va un parametro
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route
          exact
          path="/detalle/:id"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
