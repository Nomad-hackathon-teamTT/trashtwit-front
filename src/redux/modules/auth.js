// Import
import { API_URL, FB_APP_ID } from "../../../constants";
import { AsyncStorage } from "react-native";
// import { Facebook } from 'expo';

// Actions
const LOG_IN = "LOG_IN";
const SIGN_UP = "SIGN_UP";
const LOG_OUT = "LOG_OUT";


// Action Creators
function loginAction(token, user) {
  return {
    type: LOG_IN,
    token,
    user
  };
}

function signupAction(token){
  return {
    type: SIGN_UP,
    token
  }
}

function logoutAction(success){
  return {
    type: LOG_OUT,
    success
  }
}

// API ACTION
// Login (take the username and return token and profile)
function login(username, password){
  return dispatch => {
    return fetch(`${API_URL}/rest-auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token && json.user){
          dispatch(loginAction(json.token, json.user));
          return true;
        } else {
          return false;
        }
      });
  };
}


function signup(username, email, password1, password2){
  return dispatch => {
    return fetch(`${API_URL}/rest-auth/registration/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password1,
        password2
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token && json.user){
          dispatch(signupAction(json.token, json.user));
          // dispatch(loginAction(json.token, json.user));
          return true;
        } else {
          return false;
        }
      });
  }
}

function logout(){
  fetch(`${API_URL}/rest-auth/logout/`, {
    method: "POST"
  })
    .then(response => response.json())
    .then(json => {
      if (json.detail === "Successfully logged out."){
        dispatch(logoutAction(true));
        return "Successfully logged out.";
      } else {
        dispatch(logoutAction(false));
        return "Something went wrong.";
      }
    });
}


// Initial State
const initialState = {
  isLoggedIn: false
};

// Reducers
const reducer = (state=initialState, action) => {
  // Initial State only when the user installs and opens the app for the first time.
  // Save the state to the disk of the phone. It's like it's own database.
  switch (action.type){
    case LOG_IN:
      return applyLogin(state, action);
    case SIGN_UP:
      return applySignup(state, action);
    case LOG_OUT:
      return applyLogout(state, action);
    default:
      return state;
  }
};

// Reducer Functions
function applyLogin(state, action){
  const { token, user } = action;
  return {
    ...state,
    isLoggedIn: true,
    token,
    profile: user
  }
}

function applySignup(state, action){
  const { token, user } = action;
  return {
    ...state,
    token,
  }
}

function applyLogout(state, action){
  AsyncStorage.clear();
  const { success } = action;
  return {
    ...state,
    isLoggedIn: false,
    token: ""
  }
}

// Export action creators
const actionCreators = {
  login,
  signup,
  logout,
};

export { actionCreators };

// Default Export reducer
export default reducer;