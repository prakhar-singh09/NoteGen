import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './assets/img1.svg';

function AutoLayoutSizingExample() {
  return (
    <Container>
      <Row>
        <Col className = "heading"> NotesApp
        </Col>
        <Col className ="img1"> <img src={img1} alt="Logo" />; </Col>
      </Row>
      <Row>
        <Col xs= {6}> <h2  className = "subheading">Your notebook on cloud - Safe & Secure</h2> 
        <p className='subheading1'>An online web platform where you can create, edit, upload, delete your notes
        information privately and securely without any disturbance. </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutSizingExample;