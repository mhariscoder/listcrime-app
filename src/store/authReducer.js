const initialState = {
    auth: false,
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user')
          ? JSON.parse(localStorage.getItem('user'))
          : null,
    isLoading: false,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return { ...state, isLoading: true, error: null };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, auth: true, token: action?.payload?.access_token,  user: action?.payload?.user, isLoading: false };
      case 'FETCH_DATA_FAILURE':
        return { ...state, auth: false, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };
  
  export default authReducer;