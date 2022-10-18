const URL = process.env.REACT_APP_API_CAFE;
const URL2 = process.env.REACT_APP_API_USUARIOS;
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

export const obtenerProductoAPI = async(id)=>{
    console.log(URL)
    try {
        const respuesta = await fetch(URL+'/'+id)
        const producto={
        dato:    await respuesta.json(),
            status:respuesta.status
        }
        return producto;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const crearProductoAPI = async(producto)=>{
    console.log(URL)
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
export const editarProductoAPI = async(id, producto)=>{
    // console.log(URL)
    try {
        const respuesta = await fetch(URL,{
            method:"PUT",
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

export const borrarProductoAPI = async(id)=>{
    // console.log(URL)
    try {
        const respuesta = await fetch(URL+'/'+id,{
            method:"DELETE"
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

//Usuarios

export const consultarUsuariosAPI = async()=>{
    console.log(URL2)
    try {
        const respuesta = await fetch(URL2);
        const listaUsuarios = await respuesta.json()
        return listaUsuarios;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const crearUsuarioAPI = async(usuario)=>{
    console.log(URL2)
    try {
        const respuesta = await fetch(URL2,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}