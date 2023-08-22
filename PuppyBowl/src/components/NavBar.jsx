import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <> 
    <h1>Puppy Bowl</h1>
      <div>
        <div id="navbar" className="nav">
          <Link to="/"> All Players </Link>
          <Link to="/New"> Register new Player! </Link>
          <Link to="/Players"> Single Player </Link>
        </div>
      </div>
     
      <label>
          Search:{""}
          <input
            placeholder="search"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </label>
    </>
  );
}
