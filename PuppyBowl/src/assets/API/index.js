// import { useParams } from "react-router-dom";

const cohortName = "2306-GHP-ET-WEB-FT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

// export const playerId = `${API_URL}/player/id`;

// export async function fetchPuppies() {
//   try {
//     const response = await fetch(`${API_URL}/players`);
//     const result = await response.json();
//     const players = result.data.players;
//     console.log(players);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };
export const fetchPuppies = async() => { 
    try{
        const response = await fetch(`${API_URL}/players`);
        const result = await response.json();
        // console.log(result);
        const players = result.data.players;
        console.log(players);
        }catch (error){
            console.error(error);
        };
    }

export const fetchPup = async(id) => {
    try{
        const response = await fetch(`${API_URL}/players/${id}`);
        const result = await response.json();
        const playerId = result.data.players.id;
    } catch (error) {
        console.error(error);
    };
}
// export default fetchPup;

// export async function fetchPup(id) {
//   try {
//     const response = await fetch(`${API_URL}/players/${id}`);
//     const result = await response.json();
//     // const playerId = result.data.players.id;
//   } catch (error) {
//     console.error(error);
//   }
// }
