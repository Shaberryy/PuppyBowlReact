// export default function SinglePlayer(){
//     return(
//         <h1>single player</h1>
//     )
// }
import { useState, useEffect } from "react";
// import fetchPup from "../assets/API/index.js";
import "../assets/API/index.js";

export default function SinglePlayer() {
    <><h1>Single Player</h1></>;
    const [singlePup, setSinglePup] = useState([]);
  //   console.log(players);
    useEffect(() => {
      async function fetchSinglePup() {
        try {
          const response = await fetchPup();
          // const response = await fetch(
          //   "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"
          // );
          // const result = await response.json(); 
          setSinglePup(response)
        } catch (error) {
          console.error("WHAT");
        }
      }
      fetchSinglePup();
    }, []);
}