import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './AddMovie.css';

const AddMovie = ({ Add }) => {
  const [show, setShow] = useState(false);

  const handelClose = () => setShow(false);
  const handelShow = () => setShow(true);

  // Initialisation
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
  const [posterUrl, setPosterUrl] = useState('');

  // Gestion des champs
  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleRate = (e) => setRate(e.target.value);
  const handlePoster = (e) => setPosterUrl(e.target.value);

  // Fonction Add Movie
  const handleMovie = () => {
    let newMovie = { title, description, rate, posterUrl };
    Add(newMovie);
    handelClose();
  };

  return (
    <div>
      {/* Bouton Add Movie fixe */}
      <div className="add-movie-button">
        <button onClick={handelShow}>Add Movie</button>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handelClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={handleTitle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={handleDescription}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Rate"
                value={rate}
                onChange={handleRate}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Poster URL"
                value={posterUrl}
                onChange={handlePoster}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handelClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleMovie}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
