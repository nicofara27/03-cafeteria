const URL = process.env.REACT_APP_API_CAFE;



export const consultarAPI = async() => {
    try {
        //Peticion GET para obtener el listado de todos los productos
        const respuesta  = await fetch(URL);
        const listaProductos = await respuesta.json();
        return listaProductos;
    } catch (error) {
        console.log(error)
        return false;
    }
}