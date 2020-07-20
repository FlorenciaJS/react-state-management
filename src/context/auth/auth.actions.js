import { applyMiddleware } from './auth.middleware';

export const Actions = (dispatch) => {
  return {
    login: (credentials) => applyMiddleware(dispatch, { type: 'LOGIN', payload: credentials }),
    logout: () => applyMiddleware(dispatch, {type: "LOGOUT"}),
    error: (msg) =>  dispatch({type: "ERROR", msg}),
  }
}
