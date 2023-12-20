import esp from "../../img/esspresso.svg";
import Styles from "./Product.module.css";
import {Link} from "react-router-dom";

export default function EspressoPage() {
  return (
    <>
      <div className={Styles.cle}>
       <img src={esp} alt={esp} />
       <div>
        <h2>ESPRESSO</h2>
        <p>Espresso is one of the most popular 
          coffee-brewing methods of Italian origin.
           Ristretto is an espresso shot. It uses 
           less hot water which creates a sweeter 
           flavor compared to the bitter taste of a 
           traditional shot of espresso or a doppio.
        </p>
        <Link to="/details"><span>Place Order</span></Link>
      </div>
      </div>

    </>
  )
}

