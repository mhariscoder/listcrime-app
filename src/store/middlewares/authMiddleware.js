import { FETCH_DATA_SUCCESS } from "./../actions";

const authMiddleware = (store) => (next) => (action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA_SUCCESS:
      const { access_token, user } = payload || {};
      
      if (access_token) localStorage.setItem('token', access_token);
      if (user) localStorage.setItem('user', JSON.stringify(user));
      break;

    default:
      break;
  }

  return next(action);
};

export default authMiddleware;