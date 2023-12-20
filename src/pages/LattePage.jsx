import lat from "../../img/latte.svg";
import Styles from "./Product.module.css";
import {Link} from "react-router-dom";

export default function LattePage() {
  return (
    <>
    <div className={Styles.cle}>
     <img src={lat} alt={lat} />
     <div>
        <h2>LATTE</h2>
        <p>Caffè latte, is a coffee drink of Italian origin
           made with espresso and steamed milk. 
           The word Latte means - milk Coffee in Italy. 
           This type of Coffee is much creamier.
            Latte is made with espresso and a high quantity of steamed milk. 
            It is served as an iced latte in mostly.
        </p>
        <Link to="/details"><span>Place Order</span></Link>
      </div>
    </div>

    </>
  )
}
