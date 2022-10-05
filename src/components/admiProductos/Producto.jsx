import {Card, Button, Col} from 'react-bootstrap'

const Producto = () => {
  return (
    <Col md="4" lg="3" className="my-2">
    <Card className='px-2'>
      <Card.Img variant="top" src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body>
        <Card.Title className='fs-4 fw-semibold'>Brownie</Card.Title>
        <Card.Text >
          Precio: $300
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className='' variant="danger">Go somewhere</Button>
      </Card.Footer>
    </Card>
    </Col>
  );
};

export default Producto;
