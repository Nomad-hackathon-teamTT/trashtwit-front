// Import
import { API_URL, FB_APP_ID } from "../../../constants";
import { AsyncStorage } from "react-native";
// import { Facebook } from 'expo';

// Actions
const SET_USER = "SET_USER";


// Action Creators
function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}


// API ACTION
function getSelfProfile() {
  return (dispatch, getState) => {
    const { user: { token, profile: { username } } } = getState();
    fetch(`${API_URL}/users/${username}/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setUser(json)));
  };
}

function getProfile(username) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    return fetch(`${API_URL}/users/${username}/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => json);
  };
}


// Initial State
const initialState = {};

// Reducers
const reducer = (state=initialState, action) => {
  // Initial State only when the user installs and opens the app for the first time.
  // Save the state to the disk of the phone. It's like it's own database.
  switch (action.type){
    case SET_USER:
      return applySetUser(state, action);
    default:
      return state;
  }
};

// Reducer Functions
function applySetUser(state, action) {
  const { user } = action;
  return {
    ...state,
    profile: user
  };
}

// Export action creators
const actionCreators = {
  getSelfProfile,
  getProfile,
};

export { actionCreators };

// Default Reducer Export
export default reducer;