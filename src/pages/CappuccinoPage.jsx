import cap from "../../img/cappuccino.svg";
import Styles from "./Product.module.css";
import {Link} from "react-router-dom";


export default function CappuccinoPage() {
  return (
    <>
    <div className={Styles.cle}>
    <img src={cap} alt={cap} />
      <div>
        <h2>CAPPUCINO</h2>
        <p>A cappuccino is an espresso-based coffee drink 
          that is traditionally prepared with steamed milk foam.  
          However, generally, it is prepared by pouring equal 
          amounts of steamed milk and foam into one-third of the espresso.</p>
        <Link to="/details"><span>Place Order</span></Link>
      </div>
    </div>
    </>
  )
}
