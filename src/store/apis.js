import store from "store";
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./actions";
import { showSuccess } from "utils/toast";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const token = store.getState().auth?.token;

export const login = async (payload) => {
  try {
    store.dispatch({ type: FETCH_DATA_REQUEST });

    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {},
      body: payload
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    store.dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    showSuccess(data?.message || 'Login Successfully!');
    
    return data;
  } catch (error) {

    store.dispatch({ type: FETCH_DATA_FAILURE, payload: error });
    return null;
  }
};

export const logout = async (payload) => {
  try {
    const response = await fetch(`${baseUrl}/auth/logout`, {
      method: 'POST',
      headers: {},
      body: payload
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    store.dispatch({ type: FETCH_DATA_SUCCESS, payload: { token: null, user: null } });
    showSuccess('Logout Successfully!');
    localStorage.removeItem('token');
    localStorage.removeItem('user');

  } catch (error) {

    store.dispatch({ type: FETCH_DATA_FAILURE, payload: error });
    return null;
  }
};