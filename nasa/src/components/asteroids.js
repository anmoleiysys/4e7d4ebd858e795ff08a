import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/asteroid.css";

function Asteroids(props) {

    const history = useHistory();
    const data = history.location.state;
    console.log("Data ", data);


    return (
        <div className="container">
            <span className="w3-large">Asteroid Details</span>

            <div className="asteroid-details w3-padding-bottom">
                <div>
                    name : {data.name}
                </div>

                <div>
                    nasa_jpl_url : <a href={data.nasa_jpl_url}>{data.nasa_jpl_url}</a>
                </div>

                <div>
                    is_potentially_hazardous_asteroid : {data.is_potentially_hazardous_asteroid ? <span className="w3-text-green">Yes</span> : <span className="w3-text-red">No</span>}
                </div>
            </div>
        </div>
    );

}

export default Asteroids;
