export const applyMiddleware = dispatch => action => {

  switch (action.type) {
    case ('LOGIN'):
      //Call Api Service for login
      dispatch({ type: 'STARTED' });
      setTimeout(() => {
        dispatch({ type: 'FAIL', error:"Not found your accout" })
      }, 2000);
    break;
    default:
      return null;
  }

}
