import React from "react";
import { Badge, Card, Container } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="my-5">
      <Card className="flex-row px-3">
        <Card.Img className="w-25" src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Card.Body>
          <Card.Title className="fw-semibold fs-3" >Brownie</Card.Title>
          <hr />
          <Badge bg="success" >Dulce</Badge>
          <Card.Text className="fw-semibold fs-5">
            Precio: $300
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
