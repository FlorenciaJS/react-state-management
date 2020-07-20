import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  
  const [ state, setState ] = useState('hello world');

  return (
    <AuthContext.Provider value={{ state, setState}}>
      {children}
    </AuthContext.Provider>
  )

}

export {AuthContextProvider, AuthContext}