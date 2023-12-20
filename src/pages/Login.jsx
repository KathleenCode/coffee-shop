import Back from "../components/Back";
import login from "../../img/login.avif";
import {Form, redirect} from "react-router-dom";
import {useState, useEffect} from "react";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const login = {
      username,
      password
    }
    console.log(login);
    alert("login successful");
  }
  useEffect(() => {
    return () => {
      console.log(login)
    }
  })

  return (
    <>
    <Back />
    <div className="login">
     <h1>Coffee Enjoy !</h1>
     <img src={login} alt={login} />
     <span>Login</span>
     <Form onSubmit={handleSubmit}>
         <label htmlFor="username">Username</label>
         <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
         <label htmlFor="password">Password</label>
         <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
         <button>Login</button>
     </Form>
    </div>
    </>
  )
}
