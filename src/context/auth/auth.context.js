import React, { createContext, useReducer, useContext } from 'react';
import { AuthReducer, initialState } from './auth.reducer';
import { Actions } from './auth.actions';

const AuthContext = createContext(initialState);
const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AuthReducer, initialState)
  const actions = Actions(dispatch);

  return (
    <AuthContext.Provider value={{ ...state, actions }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, useAuthContext };