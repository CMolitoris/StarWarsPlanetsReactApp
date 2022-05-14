import './App.css';
import { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import axios from 'axios';

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
    <div >
      <h2 class='title'>
        Star Wars Planets
      </h2>
      <div class='acc-style'>
          <Accordion style={{textAlign: 'left'}} id="styled-acc">
            {planets.map((planet, index) => {
                return (
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header >{planet.name}</Accordion.Header>
                    <Accordion.Body >
                      Rotation Period: {planet.rotation_period}<br/>
                      Orbital Period: {planet.orbital_period}<br/>
                      Diameter: {planet.diameter}<br/>
                      Climate: {planet.climate}<br/>
                      Gravity: {planet.gravity}<br/>
                      Terrain: {planet.terrain}<br/>
                      Surface Water: {planet.surface_water}<br/>
                      Population: {planet.population}
                    </Accordion.Body>
                  </Accordion.Item>
                )
            })}
          </Accordion>
      </div>
    </div>
  );
  
}

export default App;
