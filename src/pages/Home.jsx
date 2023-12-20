import { NavLink } from "react-router-dom";
import cup from "../../img/coffeecup.avif";
import "../App.css";

export default function Home() {
  return (
    <>
    <div className="home">
        <img src={cup} alt={cup} />
        <p>Coffee Enjoy !</p>
        <div>
            <NavLink to="/login"><input type="radio" /></NavLink>
            <NavLink to="/products"><input type="radio" /></NavLink>
            <NavLink to="/details"><input type="radio" /></NavLink>
            <NavLink to="/game"><input type="radio" /></NavLink>
        </div>
    </div>
    </>
  )
}
