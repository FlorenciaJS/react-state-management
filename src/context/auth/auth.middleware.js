import ApiService from '../../services/api.service';

export const applyMiddleware = (dispatch, action) => {

  switch (action.type) {
    
    case ('LOGIN'):
      dispatch({ type: 'FETCHING' });
      ApiService.post(action.payload)
      .then((token) => {
        dispatch({ type: 'SUCCESS'})
        applyMiddleware(dispatch, {type: 'SET_TOKEN', token})
      }).catch((error) => {
        dispatch({ type: 'ERROR', msg: error})
      })
      break;

    case ('SET_TOKEN'):
      dispatch({type: 'SET_TOKEN', token: action.token})
      break;

    default:
      return null;
  }
}
