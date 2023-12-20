import Back from "../components/Back";
import { Outlet } from "react-router-dom";
import Cappuccino from "../components/Cappuccino";
import Espresso from "../components/Espresso";
import Latte from "../components/Latte";
import BackHome from "../components/BackHome";

export default function Products() {
  return (
    <>
    <div style={{display: "flex", justifyContent: "space-between"}}>
     <Back />
     <BackHome />
    </div>
    <div style={{display: "flex"}}>
      <div>
       <Cappuccino />
       <Espresso />
       <Latte />
      </div>

    <main style={{backgroundColor: "#E8C07D", color: "#CC704B", borderRadius: "13px", margin: "1rem"}}>
        < Outlet />
    </main>
    </div>
    </>
  )
}
