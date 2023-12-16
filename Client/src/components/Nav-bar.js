import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function NavScrollExample() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <LinkContainer to = "/"> 
       <Navbar.Brand className='brand'>NotesApp</Navbar.Brand>
      </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <LinkContainer to = "/"> 
           <Nav.Link>Home</Nav.Link>
           </LinkContainer>
           <LinkContainer to = "/Notes"> 
           <Nav.Link>Notes</Nav.Link> 
           </LinkContainer>
           <LinkContainer to = "/About"> 
           <Nav.Link>About Us</Nav.Link> 
           </LinkContainer>
          </Nav>
         
            <Button variant="outline-primary">Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;