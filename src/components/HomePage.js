import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import img1 from './assets/img1.svg';


const HomePage = () => {
  return (
    <>
    <Container>
      <Row>
        <Col xs= {6}>
        <h1 className = "heading"> NotesApp </h1>
        <h2 className = "subheading">Your notebook on cloud - 
        <span style={{color: "orange", fontWeight:"bold" }}>Safe </span> & <span style={{color: "orange", fontWeight:"bold"}}>Secure </span> </h2> 
        <p className = "subheading1"> An online web platform where you can create, edit, upload, delete your notes
        information privately and securely without any disturbance. </p>
        <Button variant="outline-primary" size="lg" style={{ marginTop :'30px'}}>Create New Note</Button>
        </Col> 
        <Col> <img className ="img" src={img1} alt="Logo" /> </Col>
      </Row>  
    </Container>
    
     </>
  );
};

export default HomePage;