import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img3 from './assets/img3.svg';
const About = () => {
   return (
    <>
    <Container>
      <Row >
         <Col xs = {6} >
         <h1 className='about'>Empowering <span style={{color:'orange'}}>Students </span></h1>
         <p>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>

         <h2>Make something <span style={{color:'orange'}}>Awesome</span></h2>
         <p> Notespace is made from the pain of writing all the things in notebook 
            which is very hectic :(, So we made an online web platform where you 
            can create, edit, upload, delete your notes/information privately and
             securely without any disturbancee. you can also access your notes anywhere
              in your world, at anytime time . So dont forget to Create note because 
              creating anything is always important </p>
         </Col>
         <Col><img className ="img3" src={img3} alt="Logo" /></Col>
      </Row>
      <Row>
         
         </Row>
    </Container>
    </>
   )
}

export default About;