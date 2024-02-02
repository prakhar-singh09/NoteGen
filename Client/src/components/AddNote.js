import React from "react"
import { useContext, useState } from "react";
import NoteContext from "../context/Notes/noteContext";
import alertContext from "../context/Alert/alertContext";
import {Container,Row,Col,Button,Form} from 'react-bootstrap';
import img2 from './assets/img2.svg';

const AddNote = () => {
    const { addNote } = useContext(NoteContext); // get the addNote function from the note context
    const { showAlert } = useContext(alertContext); // get the showAlert function from the alert context
    const [note, setNote] = useState({ title: "", description: "", tag: "" }); // initialize state for the note form inputs

    // function to handle form submission
    const handleClick = (e) => {
        e.preventDefault(); // prevent default form submission behavior
        addNote(note.title, note.description, note.tag); // call the addNote function from the note context with the current note data
        setNote({ title: "", description: "", tag: "" }); // reset the state for the note form inputs
        showAlert('Added Note Sucessfully :)', 'success'); // show an alert message to the user using the showAlert function from the alert context
    }

    // function to handle input changes
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value }) // update the state for the note form inputs based on user input
    }

    return (
        <>
           <Container>
      <Row>
        <Col xs={6}>
          <h1 className='heading2'>Create a <span style={{ color: 'orange' }}>Note</span></h1>
          <h5 className='subheading2'>Add a new note with your info</h5>
          <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control size="lg" type="email" placeholder="Title"   value={note.title}
                                    onChange={onChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control size="lg" type="password" placeholder="Tag"   value={note.tag}
                                    onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control size="lg" type="password" placeholder="Description"  value={note.description}
                                    onChange={onChange}/>
            </Form.Group>

            <Button disabled={note.title.length < 3 || note.description.length < 5} onClick={handleClick} size='lg' variant="outline-primary " style={{ marginTop: '20px' }} type="submit">
              Add a Note
            </Button>
          </Form>

        </Col>

        <Col> <img className="img2" src={img2} alt="Logo" /> </Col>

      </Row>
    </Container>
        </>
    )
}
export default AddNote