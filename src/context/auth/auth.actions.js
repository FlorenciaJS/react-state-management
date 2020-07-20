export const Actions = (state, dispatch) => ({
  login: credentials => dispatch({ type: 'LOGIN', payload: credentials }),
});
