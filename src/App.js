import './App.css';
import { useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
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
import DetailsModal from './components/DetailsModal/DetailsModal';
import 'react-star-wars-crawl/lib/index.css';
import FavoritesOC from './components/FavoritesOC/FavoritesOC';
import FavoriteButton from './components/FavoriteButton/FavoriteButton';

function App() {

  const [planets, setPlanets] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getPlanets();
    getFavorites();
  },[setPlanets,setFavorites]);

  const getPlanets = async () => {
    let URL = "https://swapi.dev/api/planets/";
  
    let arrayPlanets = [];

    let response = await axios.get(URL)
      arrayPlanets = arrayPlanets.concat(response.data.results);
      console.log(response)

    while (response.data.next !== null) {
      response = await axios.get(response.data.next)
      arrayPlanets = arrayPlanets.concat(response.data.results)
    }



    console.log(arrayPlanets);
    setPlanets(arrayPlanets);
  }

  const getFavorites = async () => {
    let URL = "http://localhost:8080/planets/all";
    let temp = [];

    await axios.get(URL)
      .then(res => {
        temp = res.data;
        setFavorites(temp.filter((planet) => {
          return planet.isLiked === "Y";
        }));
      });
  }

  const isFavorite = (planet) => {
    let temp = favorites.filter((element) => {
        return element.name === planet.name;
    })
    if (temp.length > 0) {
      return "Y";
    } else {
      return "N"
    }
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
            <h2 className='title-banner starwars-font'>Star Wars Planets</h2>
            <hr style={{color: "yellow"}}/>
            <h6 className='text-center starwars-font' style={{color: "#FFE81F"}}>
              Below you will find your favorite Star Wars planets. Find out 
              more about each of them by clicking the "Details" button where 
              you will be brought to an enhanced view with the specifics of 
              each planet!
            </h6>
          </div>
        </div>
      </div>
      <FavoritesOC favorites={favorites} getPlanetName={getPlanetName}/>
      <div className='container card-body-style' align="center">
        <div className='row starwars-font'>                            
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
                              <div className='container'>
                                <div className='row'>
                                  <div className='col-6'>
                                    <DetailsModal planet={planet} planetPhoto={getPlanetName(planet.name)}/>
                                  </div>
                                  <div className='col-6'>
                                    <FavoriteButton planet={planet} favorite={isFavorite(planet)}/>
                                  </div>
                                </div>
                              </div>
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
