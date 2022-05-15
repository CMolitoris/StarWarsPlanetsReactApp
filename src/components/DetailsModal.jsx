import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import './DetailsModal.css';

function DetailsModal(props) {

    const [movies, setMovies] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getFeaturedMovies = (films) => {
        let movieList = [];
        
        for (let film of films) {
            let movieName = getMovieTitle(film[film.length-2]);
            console.log(movieName)
            movieList.push(movieName);
        }
        setMovies(movieList);
    }

    const getMovieTitle = episodeId => {
        switch(episodeId) {
            case "1":
                return "A New Hope";
            case "2":
                return "The Empire Strikes Back";
            case "3":
                return "Return of the Jedi";
            case "4":
                return "The Phantom Menace";
            case "5":
                return "Attack of the Clones";
            case "6":
                return "Revenge of the Sith";
            default:
                return null;
        }
    }
    

    return (
        <>
            <Button style={{width:"100%"}} variant="dark" onClick={() => {handleShow(); getFeaturedMovies(props.planet.films);}}>
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
                        <Row className='rounded-3 shadow' style={{backgroundColor: "#BB6464"}}>
                            <Col>
                                <Image className='card-image-modal rounded-3 image-style' src={props.planetPhoto}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={{ span: 6, offset: 0 }} className='mt-3 rounded-3 shadow p-2' style={{backgroundColor: "white"}}>
                                <h4>Planet Details</h4>
                                <hr/>
                                <ul >
                                    <li>
                                        Rotation Period: {props.planet.rotation_period}<br/>
                                    </li>
                                    <li>
                                        Orbital Period: {props.planet.orbital_period}<br/>
                                    </li>
                                    <li>
                                        Diameter: {props.planet.diameter}<br/>
                                    </li>
                                    <li>
                                        Climate: {props.planet.climate}<br/>
                                    </li>
                                    <li>
                                        Gravity: {props.planet.gravity}<br/>
                                    </li>
                                    <li>
                                        Terrain: {props.planet.terrain}<br/>
                                    </li>
                                    <li>
                                        Surface Water: {props.planet.surface_water}<br/>
                                    </li>
                                    <li>
                                        Population: {props.planet.population}
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={{ span: 5, offset: 1 }} className='mt-3 rounded-3 shadow p-2' style={{backgroundColor: "white"}}>
                                <h4>Featured Movies</h4>
                                <hr/>
                                <ul>
                                    {movies.map(movie => {
                                        return (
                                            <li>
                                                {movie}
                                            </li>
                                        );
                                    })}
                                </ul>
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