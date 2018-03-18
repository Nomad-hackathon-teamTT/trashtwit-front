// Imports

import { API_URL, FB_APP_ID } from "../../../constants";
import { actionCreators as userActions } from "./user";
import uuidv1 from "uuid/v1";

// Actions

const SET_FEED = "SET_FEED";
const SET_SEARCH = "SET_SEARCH";

// Action Creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

function setSearch(search) {
  return { type: SET_SEARCH, search };
}

// API Actions

function getFeed(latitude, longitude) {
  return dispatch => {
    return fetch(`${API_URL}/twits/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        latitude,
        longitude
      })
    }).then(response => response.json())
      .then(json => dispatch(setFeed(json)));
  };
}

function getSearch() {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/twits/search/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setSearch(json)));
  };
}

function searchByHashtag(hashtag) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/twits/search/?hashtags=${hashtag}`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setSearch(json)));
  };
}

function voteTwit(twitID) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    return fetch(`${API_URL}/twits/${twitID}/vote/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logOut());
      } else if (response.ok) {
        return true;
      } else {
        return false;
      }
    });
  };
}

function unvoteTwit(twitID) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    return fetch(`${API_URL}/twits/${twitID}/unvote/`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logOut());
      } else if (response.ok) {
        return true;
      } else {
        return false;
      }
    });
  };
}

function postTwit(twit, latitude, longitude, tags) {
  const tagsArray = tags.split(",");
  const data = new FormData();
  data.append("twit", twit);
  data.append("latitude", latitude);
  data.append("longitude", longitude);
  data.append("tags", JSON.stringify(tagsArray));
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    return fetch(`${API_URL}/postTwits/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "multipart/form-data"
      },
      body: data
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logOut());
      } else if (response.ok) {
        dispatch(getFeed());
        dispatch(userActions.getSelfProfile());
        return true;
      } else {
        return false;
      }
    });
  };
}

// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case SET_SEARCH:
      return applySetSearch(state, action);
    default:
      return state;
  }
}

// Reducer Actions

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

function applySetSearch(state, action) {
  const { search } = action;
  return {
    ...state,
    search
  };
}

// Exports

const actionCreators = {
  getFeed,
  getSearch,
  voteTwit,
  unvoteTwit,
  searchByHashtag,
  postTwit
};

export { actionCreators };

// Default Reducer Export

export default reducer;