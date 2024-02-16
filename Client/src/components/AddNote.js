import React, { useContext, useState } from "react";
import openai from "openai";
import NoteContext from "../context/Notes/noteContext";
import alertContext from "../context/Alert/alertContext";
import addnoteimg from './assets/img2.svg'

const AddNote = () => {
    const { addNote } = useContext(NoteContext);
    const { showAlert } = useContext(alertContext);
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const [generatedDescription, setGeneratedDescription] = useState("");

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        showAlert('Added Note Successfully :)', 'success');
    };

    const generateDescription = async () => {
        try {
            const response = await fetch('http://localhost:5600/generate-description', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: note.title }),
            });
    
            const data = await response.json();
    
            setGeneratedDescription(data.description);
        } catch (error) {
            console.error('Error generating description:', error);
        }
    };
    

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-6">
                        <h2 style={{ fontWeight: "bold" }}>Create a <span style={{ color: "darkred", fontWeight: "bold" }}> Note </span></h2>
                        <p>Add a new note with your info</p>
                        <form>
                            <div className="my-3 material-textfield">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    placeholder=" "
                                    value={note.title}
                                    onChange={onChange}
                                />
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                            </div>
                            <div className="my-3 material-textfield">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="tag"
                                    name="tag"
                                    placeholder=" "
                                    value={note.tag}
                                    onChange={onChange}
                                />
                                <label htmlFor="tag" className="form-label">
                                    Tag
                                </label>
                            </div>
                            <div className="my-3 material-textfield">
                                <input style={{ height: "70px" }}
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    placeholder=" "
                                    value={note.description}
                                    onChange={onChange}
                                />
                                <label htmlFor="description" className="form-label">
                                    Description
                                </label>
                            </div>

                            <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-lg btn-outline-primary mt-2 mb-3 me-2" onClick={handleClick}>
                                Add Note
                            </button>
                            <button  type="submit" className="btn btn-lg btn-outline-primary mt-2 mb-3 me-2" onClick={generateDescription}>
                                Generate Description
                            </button>
                        </form>

                        {generatedDescription && (
                            <div className="alert alert-info mt-2" role="alert">
                                <strong>Generated Description:</strong> {generatedDescription}
                            </div>
                        )}

                    </div>
                    <div className="col-lg-5 col-7 d-sm-none  d-md-block ms-5 me-1">
                        <img className="img-fluid d-none d-sm-block" src={addnoteimg} alt='home' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddNote;
