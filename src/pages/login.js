import React, { useState, useContext } from 'react'

import './login.css';
import { AuthContext } from '../context/auth/auth.context';

export const Login = () => {

  const { status, errormsg, token, actions, dispatch } = useContext(AuthContext); 
  const [ username, setUsername ] = useState('eve.holt@reqres.in');
  const [ password, setPassword ] = useState('cityslicka');
   
  const onSubmit = (e) => {
    if (username === "" || password === "") {
      dispatch({type: 'ERROR', msg: 'Undefined credentials'})
    } else {
      actions.login({username, password})
    }
    e.preventDefault();
  }
  
  return(
    <div className="Container">
      <h1>Login</h1>
      {status === 'error'&&<p>{errormsg}</p>}
      {token && <p>{token}</p>}
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <input type="submit" onClick={onSubmit} value={status !== 'fetching' ? "Ingresar" : "Loading..."}/>
    </div>
  );
}
