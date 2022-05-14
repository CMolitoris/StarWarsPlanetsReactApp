import './App.css';
import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import hoth from "./static/images/hoth.jpg";

function App() {

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  },[]);

  const getPlanets = async () => {
    let URL = "https://swapi.dev/api/planets/";

    const response = await axios.get(URL)
      .then( res => {
        setPlanets(res.data.results)
      }
    );
  }

  return (
    <div className='main-container'>
      <div className='container con-title'>
        <div className='row'>
          <div className='offset-1 col-10'>
            <h2>Star Wars Planets</h2>
            <hr/>
            <h6 className='text-center'>
              Below you will find your favorite Star Wars planets. When toggling the drop-down
              you will be able to see the details and find a button which will give you a more 
              detailed view of each.
            </h6>
          </div>
        </div>
      </div>
      
      <div className='container card-body-style' align="center">
        <div className='row  '>                            
          {planets.map((planet,i) => {
            return (
                <div className='col-4  '>
                    <Card className='mt-2 ' key={i} style={{ width: 'auto' }}>
                        <Card.Img className='card-image'  src={hoth} />
                        <Card.Body>
                            <Card.Title>{planet.name}</Card.Title>
                                <div>
                                    <hr/>
                                    <div className='card-scroll'>
                                      Rotation Period: {planet.rotation_period}<br/>
                                      Orbital Period: {planet.orbital_period}<br/>
                                      Diameter: {planet.diameter}<br/>
                                      Climate: {planet.climate}<br/>
                                      Gravity: {planet.gravity}<br/>
                                      Terrain: {planet.terrain}<br/>
                                      Surface Water: {planet.surface_water}<br/>
                                      Population: {planet.population}
                                    </div>
                                </div>
                            <Button id='button-color' className='w-100' variant="dark">Details <i class="bi bi-link"></i></Button>
                        </Card.Body>
                    </Card>
                </div>
            )}
          )}
        </div>
      </div>
                    
    </div>
  );
  
}

export default App;
