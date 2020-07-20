import React, { useState, useContext } from 'react'

import './login.css';
import { AuthContext } from '../context/auth/auth.context';

export const Login = () => {

  const { state, setState } = useContext(AuthContext); 
  const [username, setUsername ] = useState(null);
  const [password, setPassword ] = useState(null);
   
  const onSubmit = () => {
    setState('hola mundo')
    console.log(username, password);
  }
  
  return(
    <div className="Container">
      <h1>Login</h1>
      {state&& <p>{state}</p>}
      <input type="text" onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" onChange={(e) => setPassword(e.target.value)}/>
      <input type="submit" onClick={() => onSubmit()} value="Ingresar"/>
    </div>
  );
}
