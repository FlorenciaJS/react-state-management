const initialState = {
  status: null,
  errormsg: null,
  token: null
};

const AuthReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        status: 'fetching',
      }
    case 'SUCCESS':
      return {
        ...state,
        status: 'success',
      }
    case 'ERROR':
      return {
        ...state,
        status: 'error',
        errormsg: action.msg,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}

export {initialState, AuthReducer};
