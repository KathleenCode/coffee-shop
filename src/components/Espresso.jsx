import { useState } from "react";
import esp from "../../img/esspresso.svg";
import Styles from "../pages/Product.module.css";
import { NavLink } from "react-router-dom";

export default function Espresso() {
  const [plus, setPlus] = useState("+");

  return (
    <>
    { plus === "+" ? (<NavLink to="espresso">
     <div className={Styles.same}>
       <img src={esp} alt={esp} />
       <p>Espresso</p>
       <span>$ 25.00</span>
       <button onClick={plus === "+" ? () => setPlus("-"): () => setPlus("+")}> {plus} </button>
      </div>
     </NavLink>): (<NavLink to="">
     <div className={Styles.same}>
       <img src={esp} alt={esp} />
       <p>Espresso</p>
       <span>$ 25.00</span>
       <button onClick={plus === "+" ? () => setPlus("-"): () => setPlus("+")}> {plus} </button>
      </div>
     </NavLink>) }
    </>
  )
}
