import { useState } from "react";
import lat from "../../img/latte.svg";
import Styles from "../pages/Product.module.css";
import { NavLink } from "react-router-dom";

export default function Latte() {
  const [plus, setPlus] = useState("+");

  return (
    <>
    { plus === "+" ? (<NavLink to="latte">
      <div className={Styles.same}>
         <img src={lat} alt={lat} />
         <p>Latte</p>
         <span>$ 30.00</span>
         <button onClick={plus === "+" ?() => setPlus("-"): () => setPlus("+")}> {plus} </button>
     </div>
    </NavLink>) : (<NavLink to="">
      <div className={Styles.same}>
         <img src={lat} alt={lat} />
         <p>Latte</p>
         <span>$ 30.00</span>
         <button onClick={plus === "+" ?() => setPlus("-"): () => setPlus("+")}> {plus} </button>
     </div>
    </NavLink>)}
    </>
  )
}
