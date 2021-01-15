import React, { useState } from "react";
import "./css/home.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Home() {
  const [asteroidId, setAsteroidId] = useState("");
  const apiKey = "QIlYhy8CshO7jIkcjACj2J5gCzMNyZf3S47cErnc";
  const history = useHistory();



  async function getAsteroidWithId(asteroidId) {

    !asteroidId && alert("Please Enter Id First");
    try {
      const service = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${apiKey}`);


      console.log("servic is ", service);

      if (service.error) {
        alert("Error : " + service.error.message);
      }
      else if (service.data?.id) {
        console.log("Response is ", service.data);
        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = service.data;
        history.push({
          pathname: "/asteroid",
          state: { name, nasa_jpl_url, is_potentially_hazardous_asteroid }
        });
      } else {
        alert("Error : Unknown Error Occured");
      }
    }
    catch (e) {
      alert(`Error` + e.message);
    };
  }

  function onSubmit() {
    getAsteroidWithId(asteroidId);
  }

  async function onRandomAsteroid() {

    try {
      const service = await axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY");

      console.log("Data is ", service.data);

      if (service.error) {
        alert("Error : " + service.error.message);
      } else if (service.data?.near_earth_objects && Array.isArray(service.data?.near_earth_objects)) {

        var asteroids = service.data?.near_earth_objects;
        var asteroid = asteroids[Math.floor(Math.random() * asteroids.length)];

        getAsteroidWithId(asteroid.id);

      } else {
        alert("Error : Unknown Error Occured");
      }

    } catch (e) {
      alert(`Error` + e.message);
    };
  }

  return (
    <div className="form">
      <input className="input-text w3-input" type="text" placeholder="Enter Asteroid ID" value={asteroidId} onChange={(e) => setAsteroidId(e.target.value)} />
      <div>
        <button className="submit-btn w3-button w3-border" disabled={!asteroidId} onClick={onSubmit}>Submit</button>
      </div>
      <div>
        <button className="random-asteroid-btn w3-button w3-border" onClick={onRandomAsteroid}>Random Asteroid</button>
      </div>
    </div>
  );

}

export default Home;
