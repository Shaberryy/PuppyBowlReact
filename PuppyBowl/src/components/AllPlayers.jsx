import { useEffect, useState } from "react";
import { fetchPuppies } from "../assets/API/index.js";
import "../assets/API/index.js";
import NewPlayerForm from "./NewPlayerForm.jsx";
import PlayerList from "./PlayerList.jsx";
// import NewPlayerForm from "./NewPlayerForm.jsx";

export default function AllPlayers() {
  <>
    <h1>All Players</h1>
  </>;
  const [players, setPlayers] = useState([]);
  // const [search, setSearch] = useState("");
  //   console.log(players);
  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetchPuppies();
        setPlayers(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);

    const playersDisplay = search
      ? players.filter((player) => player.name.toLowerCase().includes(search))
      : players;

  return (
    <>
      <h1> All players</h1>
      <div>
        ÷
        <label>
          Search:{""}
          <input
            placeholder="search"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </label>
        <NewPlayerForm/>
        {error && <p>{{error}}</p>}
        {playersDisplay.map((player) => {
        return <PlayerList key={player.id} player={player}/>})}
        {/* <h2> Name: {player.name}</h2> */}
        {/* <h2> Breed: {player.breed}</h2> */}
        {/* <h2>Id: {player.id}</h2> */}
      </div>
    </>
  );
}
