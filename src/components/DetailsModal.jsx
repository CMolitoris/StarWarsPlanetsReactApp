import React, { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import './DetailsModal.css';
import Hoth from "../static/images/hoth.jpg";
import Alderaan from "../static/images/alderaan.jpg";
import Endor from "../static/images/endor.jpg";
import Coruscant from "../static/images/coruscant.jpg";
import Naboo from "../static/images/naboo.jpg";
import Tatooine from "../static/images/tatooine.jpg";
import Bespin from "../static/images/bespin.jpg";
import Yavin from "../static/images/yavin.jpg";
import Dagobah from "../static/images/dagobah.jpg";
import Kamino from "../static/images/kamino.jpg";

function DetailsModal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <>
            <Button style={{width:"100%"}} variant="dark" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header style={{textAlign:"center"}} closeButton>
                    <Modal.Title >
                        {props.planet.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Image className='card-image-modal rounded-3 image-style' src={props.planetPhoto}/>
                            </Col>
                            <Col>
                            <h5>Planet Details</h5>
                                Rotation Period: {props.planet.rotation_period}<br/>
                                Orbital Period: {props.planet.orbital_period}<br/>
                                Diameter: {props.planet.diameter}<br/>
                                Climate: {props.planet.climate}<br/>
                                Gravity: {props.planet.gravity}<br/>
                                Terrain: {props.planet.terrain}<br/>
                                Surface Water: {props.planet.surface_water}<br/>
                                Population: {props.planet.population}
                            </Col>
                        </Row>
                    </Container>
                    <div className='modal-style'>
                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
     );
}

export default DetailsModal;