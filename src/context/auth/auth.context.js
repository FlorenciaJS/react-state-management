import React, { createContext, useReducer } from 'react';
import { AuthReducer, initialState } from './auth.reducer';

const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };