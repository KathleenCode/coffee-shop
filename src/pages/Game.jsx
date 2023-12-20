
import Back from "../components/Back";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


export default function Game() {

    const [ quote, setQuote ] = useState();
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const data = useLoaderData();
    const findBenefit = data.find((be) => be.id === quote)
    console.log(findBenefit);

    useEffect(() => {
      setLoading(true)
      const fetchOne = async (id) => {
        const response = await fetch('http://localhost:9000/coffee/' + id);
        if(!response.ok) throw Error("cannot fetch quotes");
        const benef = await response.json();
        console.log(benef);
        setInfo(benef);
      }
      fetchOne(quote);
      setLoading(false)
    },[quote])


  return (
    <>
    <Back />
    <div style={{backgroundColor: "#3C2A21", fontSize: "1.5rem", padding: "17px", fontStyle: "italic", margin:"2.3rem", color: "#BCA37F", borderRadius: "23px"}}>
      <p style={{padding: "1px 6px"}}>Let's play a game whilst you place your order</p>
      <p style={{padding: "1px 6px"}}>Get to know some random information about coffee</p>
      <p style={{padding: "1px 6px"}}>If you wish, enter any number from 1 to 12, below</p>
      <input 
      style={{padding: "1rem", borderRadius: "16px", backgroundColor: "#FFEBB7", outline: "#1A120B", fontSize: "1.3rem", color: "#3C2317"}}
      name="quote" type="number" min="1" max="12" value={quote} onChange={(e) => setQuote(e.target.value)} />
  
        {
          loading === true ? 
          (<p style={{color: "#red"}}>Loading ...</p>) 
          : (  <p 
            style={{fontSize: "2.3rem", backgroundColor: "#C69774", color: "#6B240C", padding: ".7rem 2.3rem", borderRadius: "160px"
            }}>{info?.benefit}
            </p>)
        }

    </div>
   
    </>
  )
}

export async function gameLoader() {

    const response = await fetch('http://localhost:9000/coffee');
    if(!response.ok) throw Error("cannot fetch quotes");
    return response.json();
}