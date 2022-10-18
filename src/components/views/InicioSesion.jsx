import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { consultarUsuariosAPI } from "../helpers/queries";

const InicioSesion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //Inicialar useNavigate
  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    console.log(datos.email);
    //Enviar la peticion a la API
    consultarUsuariosAPI(datos).then((respuesta) => {
      if (
        respuesta.find(
          (usuario) =>
            usuario.email === datos.email &&
            usuario.contraseña === datos.contraseña
        )
      ) {
        navegacion("/administrar");
        
      } else {
        Swal.fire(
          "Se produjo un error",
          "No se pudo logear correctamente",
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Iniciar sesion</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: juanperez@gmail.com"
            minLength={15}
            maxLength={80}
            {...register("email", {
              required: "El email es obligatorio",
              minLength: {
                value: 15,
                message: "La cantidad minima de caracteres es 15",
              },
              maxLength: {
                value: 80,
                message: "La cantidad maxima de caracteres es 80",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            minLength={8}
            maxLength={24}
            {...register("contraseña", {
              required: "La contraseña es obligatoria",
              minLentgh: {
                value: 8,
                message: "La contraseña debe tener como minimo 8 caracteres",
              },
              maxLength: {
                value: 24,
                message: "La contraseña debe tener como maximo 24 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.contraseña?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default InicioSesion;
