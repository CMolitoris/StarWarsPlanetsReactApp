import './App.css';
import { useState, useEffect } from 'react';
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
    <div className="App">
      <h2>
        Star Wars Planets
      </h2>
      <div>
        <ul>
          {planets.map((planet, index) => {
              return (
              <li key={index}>
                  {planet.name}
              </li>
              )
          })}
        </ul>
      </div>
    </div>
  );
  
}

export default App;
