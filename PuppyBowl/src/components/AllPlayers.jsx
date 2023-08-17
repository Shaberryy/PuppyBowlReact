// import { responsiveFontSizes } from "@mui/material"
import { useEffect, useState } from "react";
import fetchPuppies from "../assets/API/index.js";
import "../assets/API/index.js";

export default function AllPlayers() {
  <><h1>All Players</h1></>;
  const [players, setPlayers] = useState([]);
//   console.log(players);
  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetchPuppies();
        // const response = await fetch(
        //   "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"
        // );
        // const result = await response.json(); 
        setPlayers(response)
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);

  // fetchPlayers();
  // return(
  //     <>
  //     <h1> All players</h1>
  //     <table>
  //         <thead>
  //             <tr>pups</tr>
  //         </thead>
  //         <tbody>
  //             <tr>
  //                 <td>Name</td>
  //                 <td>Age</td>
  //                 <td>Breed</td>
  //             </tr>
  //             {ConstantSourceNode.map((contact) => {
  //                 return(
  //                     <
  //                 )
  //             })}
  //         </tbody>
  //    </table>
  // </>
  // )
}
