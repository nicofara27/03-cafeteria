import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CrearProducto from './components/admiProductos/CrearProducto';
import EditarProducto from './components/admiProductos/EditarProducto';
import Administrador from './components/views/Administrador';
import DetalleProducto from './components/views/DetalleProducto';
import Error404 from './components/views/Error404';
import Inicio from './components/views/Inicio';

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/detalle' element={<DetalleProducto></DetalleProducto>}></Route>
        <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
        <Route exact path='/crear' element={<CrearProducto></CrearProducto>}></Route>
        <Route exact path='/editar' element={<EditarProducto></EditarProducto>}></Route>
        <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
