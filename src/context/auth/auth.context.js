import React, { createContext, useReducer } from 'react';
import { AuthReducer, initialState } from './auth.reducer';
import { Actions } from './auth.actions';
import { applyMiddleware } from './auth.middleware';

const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AuthReducer, initialState)
  const actions = Actions(state, applyMiddleware(dispatch));

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch, actions }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };