import React, { useState } from 'react'
import { useAuthContext } from '../context/auth/auth.context';

import './login.css';

export const Login = () => {

  const { status, errormsg, token, actions } = useAuthContext(); 
  const [ username, setUsername ] = useState('eve.holt@reqres.in');
  const [ password, setPassword ] = useState('cityslicka');
   
  const onSubmit = (e) => {
    if (username === "" || password === "") {
      actions.error('Undefined credentials')
    } else {
      actions.login({username, password})
    }
    e.preventDefault();
  }
  
  return(
    <div className="Container">
      <h1>{token ? "Welcome" : "Login"}</h1>
      { status === 'error'&&<p>{errormsg}</p> }
      { status === 'fetching'&&<p>...Loading</p> }
      { token 
      ? <div> 
          <p>{token}</p>
          <input type="submit" onClick={() => actions.logout()} value="Logout"/>
        </div>
      : <section className="form">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input type="submit" onClick={onSubmit} value={"Login"}/>
        </section>
      }
    </div>
  );
}
