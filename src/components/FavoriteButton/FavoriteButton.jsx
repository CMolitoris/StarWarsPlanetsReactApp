import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function FavoriteButton(props) {

    const toggleFavorite = async (planet) => {
    
        let planetId = planet.url[planet.url.length-2];
        const URL = `http://localhost:8080/planets/update/${planetId}`;
        
        let updated;
        if (props.favorite === "Y") {
            updated = {
                "isLiked": "N",
                "id": planet.id,
                "name": planet.name
            }
        } else {
            updated = {
                "isLiked": "Y",
                "id": planet.id,
                "name": planet.name
            }
        }

        await axios.put(URL,updated)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <React.Fragment>
            {
                (props.favorite === "Y")
                ?   <Button style={{width:"100%", backgroundColor: "black"}} variant="dark" onClick={() => toggleFavorite(props.planet)}>
                        Unfavorite
                    </Button>
                :   <Button style={{width:"100%", backgroundColor: "black"}} variant="dark" onClick={() => toggleFavorite(props.planet)}>
                        Favorite
                    </Button> 
            } 
        </React.Fragment>
    );
}

export default FavoriteButton;