import ApiService from '../../services/api.service';
import StorageService from '../../services/storage.service';

export const applyMiddleware = (dispatch, action) => {

  switch (action.type) {

    case ('LOGIN'):
      dispatch({ type: 'FETCHING' });
      ApiService.post(action.payload)
      .then((token) => {
        dispatch({ type: 'SUCCESS'})
        StorageService.setAuthToken(token);
        dispatch({type: 'SET_TOKEN', token})
        //Set currentUser
        //Redirect to Home
      }).catch((error) => {
        dispatch({ type: 'ERROR', msg: error})
      })
      break;

    case ('LOGOUT'):
      StorageService.clearAuthToken();
      dispatch({type: 'SET_TOKEN', token: null})
      //Redirect to login

    default:
      return null;
  }
}
