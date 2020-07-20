const initialState = {
  pending: false,
  error: null,
  token: null,
};

const AuthReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'STARTED':
      return {
        ...state,
        pending: true,
      }
    case 'SUCCESS':
      return {
        ...state,
        pending: false,
      }
    case 'FAIL':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state
  }
}

export {initialState, AuthReducer};
