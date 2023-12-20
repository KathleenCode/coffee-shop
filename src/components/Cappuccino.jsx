import cap from "../../img/cappuccino.svg";
import Styles from "../pages/Product.module.css";
import { NavLink } from "react-router-dom";
import {useState} from "react";


export default function Cappuccino() {
const [plus, setPlus] = useState("+");

  return (
    <>
    { plus === "+" ? (<NavLink to="cappuccino">
     <div className={Styles.same}>
         <img src={cap} alt={cap} />
         <p>Cappuccino</p>
         <span>$ 20.00</span>
         <button onClick={ plus=== "+" ? () => setPlus("-"): () => setPlus("+")}> {plus} </button>
     </div>
    </NavLink>) : (<NavLink to="">
     <div className={Styles.same}>
         <img src={cap} alt={cap} />
         <p>Cappuccino</p>
         <span>$ 20.00</span>
         <button onClick={ plus=== "+" ? () => setPlus("-"): () => setPlus("+")}> {plus} </button>
     </div>
    </NavLink>)}
    </>
  )
}
