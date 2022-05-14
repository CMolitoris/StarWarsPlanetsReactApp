import './App.css';
import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Hoth from "./static/images/hoth.jpg";
import Alderaan from "./static/images/alderaan.jpg";
import Endor from "./static/images/endor.jpg";
import Coruscant from "./static/images/coruscant.jpg";
import Naboo from "./static/images/naboo.jpg";
import Tatooine from "./static/images/tatooine.jpg";
import Bespin from "./static/images/bespin.jpg";
import Yavin from "./static/images/yavin.jpg";
import Dagobah from "./static/images/dagobah.jpg";
import Kamino from "./static/images/kamino.jpg";
import DetailsModal from './components/DetailsModal';


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

  const getPlanetName = name => {
    switch(name) {
      case "Hoth":
        return Hoth;
      case "Tatooine":
        return Tatooine;
      case "Alderaan":
        return Alderaan;
      case "Yavin IV":
        return Yavin;
      case "Dagobah":
        return Dagobah;
      case "Bespin":
        return Bespin;
      case "Endor":
        return Endor;
      case "Naboo":
        return Naboo;
      case "Coruscant":      
        return Coruscant;
      case "Kamino":
        return Kamino;  
      default:
        return null;  
    }
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
                    <Card className='mt-2 shadow' key={i} style={{ width: 'auto' }}>
                        <Card.Img className='card-image'  src={getPlanetName(planet.name)} />
                        <Card.Body>
                            <Card.Title>{planet.name}</Card.Title>
                              <hr/>
                              <div>
                                
                              </div>
                            <DetailsModal planet={planet} planetPhoto={getPlanetName(planet.name)}/>
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
