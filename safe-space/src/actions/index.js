import axios from "axios";
import axiosAuth from "../axiosAuth";


export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const USER_UNAUTHORIZED = " USER_UNAUTHORIZED";

export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

export const EDIT_START = "EDIT_START";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILURE = "EDIT_FAILURE";



export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    console.log(creds);
  const body = `grant_type=password&username=${creds.username}&password=${
    creds.password
  }`;
  return axios
    .post("https://safespaceapp.herokuapp.com/oauth/token", body, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
           "Authorization": "Basic c2FmZXNwYWNlLWNsaWVudDpzYWZlc3BhY2Utc2VjcmV0"}
    })
    .then(res => {
      console.log("random", res.data);
      localStorage.setItem("token", res.data.access_token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.access_token });
    });
};




export const deleteNote = id => dispatch => {
  dispatch({ type: DELETE_START });
  return axiosAuth()
    .delete(`https://safespaceapp.herokuapp.com/notes/delete/${id}`)
    .then(res => {
      console.log("actiondelete", res.data)
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
      axiosAuth().get("https://safespaceapp.herokuapp.com/notes/mynotes")
      .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log("call failed: ", err.response);
        if (err.response && err.response.status === 403) {
          dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
        } else {
          console.log(err)
          dispatch({ type: FETCH_DATA_FAILURE, payload: err });
        }
      });
      
    })
    .catch(err => {
      console.log("call failed: ", err);
      if (err.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err });
      } else {
        dispatch({ type: DELETE_FAILURE, payload: err });
      }
    });
};

export const editNote = note => dispatch => {
  console.log('actionNote', note)
  dispatch({ type: EDIT_START });
  return axiosAuth()
    .put(`https://safespaceapp.herokuapp.com/notes/edit/${note.noteid}`, note)
    .then(res => {
      console.log('resdata12', res.data)
      dispatch({ type: EDIT_SUCCESS })
      axiosAuth().get("https://safespaceapp.herokuapp.com/notes/mynotes")
      .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log("call failed: ", err.response);
        if (err.response && err.response.status === 403) {
          dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
        } else {
          console.log(err)
          dispatch({ type: FETCH_DATA_FAILURE, payload: err });
        }
      });
    })
    .catch(err => {
      if (err.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err });
      } else {
        dispatch({ type: EDIT_FAILURE, payload: err })
      }
    });
}


export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosAuth()
    .get("https://safespaceapp.herokuapp.com/notes/mynotes")
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("call failed: ", err.response);
      if (err.response && err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        console.log(err)
        dispatch({ type: FETCH_DATA_FAILURE, payload: err });
      }
    });
};

export const handleAddNote = (note) => dispatch => {
  dispatch({ type: ADD_START });
  
  // console.log(token);
  return axiosAuth()
    .post("https://safespaceapp.herokuapp.com/notes/newnote", note)
    
    .then(res => {
      console.log('actionsres',res.data)
      dispatch({ type: ADD_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: ADD_FAILURE, payload: err }));
};





export const registerUser = creds => dispatch => {
  dispatch({ type: REGISTER_USER });
  return axios
    .post("https://safespaceapp.herokuapp.com/user/register", creds)
    .then(res => {
      console.log("action-creator: ", res.data);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch(e => {
      console.log(e);
    });
};
