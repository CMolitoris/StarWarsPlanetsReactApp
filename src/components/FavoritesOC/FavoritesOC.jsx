import React, { Component } from 'react';
import { Offcanvas, Button, Card } from 'react-bootstrap';
import './FavoritesOC.css';

class FavoritesOC extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false,
            linkedConditions: []
         }
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    render() { 
        return (
            <>
                <Button className='w-100 mt-2' style={{backgroundColor: "black", fontFamily: "STARWARS"}} variant="dark" onClick={this.handleShow}>
                    View Favorited Planets
                </Button>
            
                <Offcanvas  id="pane" show={this.state.show} onHide={this.handleClose}>
                    <div   id='header-canvas'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title >Favorited Planets</Offcanvas.Title>
                        </Offcanvas.Header>
                    </div>
               
                    <Offcanvas.Body align='center'>
                        {this.props.favorites.map((element,i) => {
                            return (
                                <Card className='mt-2 card shadow' key={i} style={{ width: '18rem' }}>
                            
                                    <Card.Body>
                                        <Card.Title>{element.name}</Card.Title>
                                            <div>
                                                <hr/>
                                                <div>
                                                <Card.Img className='card-image'  src={this.props.getPlanetName(element.name)} />   
                                                </div>
                                            </div>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Offcanvas.Body>
              </Offcanvas>
            </>
          );
    }
}
 
export default FavoritesOC;