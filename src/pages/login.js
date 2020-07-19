import React, { useState } from 'react'

import './login.css';

export const Login = () => {

  const [username, setUsername ] = useState(null);
  const [password, setPassword ] = useState(null);
   
  const onSubmit = () => {
    //dispatch login action
    console.log(username, password);
  }
  
  return(
    <div className="Container">
      <h1>Login</h1>
      <input type="text" onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" onChange={(e) => setPassword(e.target.value)}/>
      <input type="submit" onClick={() => onSubmit()} value="Ingresar"/>
    </div>
  );
}
