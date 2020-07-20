import { applyMiddleware } from './auth.middleware';

export const Actions = (dispatch) => {
  return {
    login: (credentials) => applyMiddleware(dispatch, { type: 'LOGIN', payload: credentials }),
    error: (msg) => dispatch({type: "ERROR", msg}),
    setToken: (token) => applyMiddleware(dispatch, {type: "SET_TOKEN", token})
  }
}
