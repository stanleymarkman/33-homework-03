import React from 'react';
import axios from "axios";

 function GetSongCardsObject(){
    axios.get('http://localhost:8000/getallsongs/')
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            try{
                return JSON.parse(response.data);
            }
            catch(error){
                console.log("Unable to parse songs from server.")
                return
            }
        });
}

