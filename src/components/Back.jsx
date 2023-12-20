import { useNavigate } from "react-router-dom";

export default function Back() {
     const navigate = useNavigate();

  return (
    <>
    <button 
    style={{
        padding: ".5rem 1.7rem", 
        margin: "1rem",
        display: "block",
        backgroundColor: "#FFF5C2", 
        color: "#F4CE14", 
        fontSize: "1rem", 
        border: "3px dashed #EEF296", 
        borderRadius: "25%"}} 
        onClick={() => navigate(-1)}>Back</button>
    </>
  )
}
