import { Container, Form, Button } from "react-bootstrap";

const CrearProducto = () => {
  return (
    <Container>
      <h2 className="display-5 mt-4">Nuevo producto</h2>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicProducto">
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Cafe" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 300" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrecio">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select aria-label="Default select example" required>
            <option>Seleccione una opcion</option>
            <option value="bebida-caliente">Bebida caliente</option>
            <option value="bebida-fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default CrearProducto;
