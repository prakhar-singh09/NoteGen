import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img2 from './assets/img2.svg';

const Notes = () => {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <h1 className='heading2'>Create a <span style={{ color: 'orange' }}>Note</span></h1>
          <h5 className='subheading2'>Add a new note with your info</h5>
          <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control size="lg" type="email" placeholder="Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control size="lg" type="password" placeholder="Tag" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control size="lg" type="password" placeholder="Description" />
            </Form.Group>

            <Button size='lg' variant="outline-primary " style={{ marginTop: '20px' }} type="submit">
              Add a Note
            </Button>
          </Form>
        </Col>
        <Col> <img className="img2" src={img2} alt="Logo" /> </Col>
      </Row>
      <Row>
        <Col>
          <h1 className='heading2'>Your <span style={{ color: 'orange' }}>Notes</span></h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Notes;
