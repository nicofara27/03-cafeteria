const URL = process.env.REACT_APP_API_CAFE;
// peticion GET para obtener el listado de todos los productos
// peticion POST le pedimos a la API crear un producto (generalmente en formato json), tamb se usa en login
// peticion PUT cuando le pedimos a la API que modifique un producto
// peticion DELETE cuando le pedimos a la api borrar un producto    

export const consultarAPI = async()=>{
    console.log(URL)
    try {
        const respuesta = await fetch(URL);
        const listaProductos = await respuesta.json()
        return listaProductos;
    } catch (error) {
        console.log(error);
        return false;
    }
}
export const crearProductoAPI = async(producto)=>{
    // console.log(URL)
    try {
        const respuesta = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}