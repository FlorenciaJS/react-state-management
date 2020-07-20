import ApiService from '../../services/api.service';

export const applyMiddleware = dispatch => async action => {

  switch (action.type) {
    case ('LOGIN'):
      dispatch({ type: 'FETCHING' });
      await ApiService.post(action.payload).then((token) => {
        dispatch({ type: 'SUCCESS'})
        dispatch({ type: 'SET_TOKEN', token})
      }).catch((error) => {
        dispatch({ type: 'ERROR', msg: error})
      })
    break;
    default:
      return null;
  }

}
