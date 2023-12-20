import { useNavigate } from "react-router-dom";

export default function BackHome() {

    const navigate = useNavigate();

  return (
    <>
       <button 
    style={{
        padding: ".5rem 1.7rem", 
        margin: "1rem",
        display: "block",
        backgroundColor: "#B2533E", 
        color: "#3F2305", 
        fontSize: "1rem", 
        border: "3px dashed #EEF296", 
        borderRadius: "25%"}} 
        onClick={() => navigate("/")}>Back Home</button> 
    </>
  )
}
