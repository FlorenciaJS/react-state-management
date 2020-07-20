import React, { useState, useContext } from 'react'

import './login.css';
import { AuthContext } from '../context/auth/auth.context';

export const Login = () => {

  const { pending, error, dispatch } = useContext(AuthContext); 
  const [username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");
   
  const onSubmit = (e) => {
    if (username === "" || password === "") {
       console.log("Undefined credentials");
    } else {
      dispatch({type:'STARTED'})
      setTimeout(() => { 
        dispatch({type:'SUCCESS'})
      }, 2000);
      console.log(username, password);
    }
    e.preventDefault();
  }
  
  return(
    <div className="Container">
      <h1>Login</h1>
      <input type="text" onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" onChange={(e) => setPassword(e.target.value)}/>
      <input type="submit" onClick={onSubmit} value={!pending ? "Ingresar" : "loading..."}/>
    </div>
  );
}
