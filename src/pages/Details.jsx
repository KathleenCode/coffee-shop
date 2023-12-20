import Back from "../components/Back";
import cup from "../../img/orcup.svg";
import "../App.css";

export default function Details() {
  return (
    <>
    <Back />

    <div className="detcup">
      <img src={cup} alt={cup} />
      <form>
        <label htmlFor="cappuccino">Cappuccino</label>
        <input type="checkbox" name="cappuccino" id="cappuccino" />
        <label htmlFor="espresso">Espresso</label>
        <input type="checkbox" name="checkbox" id="espresso" />
        <label htmlFor="latte">Latte</label>
        <input type="checkbox" name="checkbox" id="latte" /> <br />
        <label htmlFor="sugar">Sugar</label>
        <input type="range" min="10" max="90" name="sugar" id="sugar" /> <br />
        <label htmlFor="milk">Milk</label>
        <input type="range" min="50" max="90" name="milk" id="milk" /><br />
        <label htmlFor="ice">Ice</label>
        <input type="range" min="1" max="9" name="ice" id="ice" />
      </form>
    </div>
    </>
  )
}
