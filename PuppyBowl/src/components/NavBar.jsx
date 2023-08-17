import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <>
      <div>
        <div id="navbar" className="nav">
          <Link to="/"> All Players </Link>
          <Link to="/New"> Register new Player! </Link>
          <Link to="/Players"> Single Player </Link>
        </div>
      </div>
      <h1>Nav</h1>
    </>
  );
}
