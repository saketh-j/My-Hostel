export const add = "ADD_USER";
export const inTime = "IN_TIME";
export const outTime = "OUT_TIME";
export const LoggedIn = "LOGGED_IN";
export const LoggedOut = "LOGGED_OUT";
export const loginInfo = "LOGIN_INFO";
export const signIn = "SIGN_INFO";

export const adduser = (data) => {
  return {
    type: add,
    payload: data
  };
};

export const addInTime = (data) => {
  return {
    type: inTime,
    payload: data
  };
};
export const addOutTime = (data) => {
  return {
    type: outTime,
    payload: data
  };
};
export const LogIn = (data) => {
  return {
    type: LoggedIn,
    payload: data
  };
};
export const LogOut = (data) => {
  return {
    type: LoggedOut,
    payload: data
  };
};
export const LoginDetails = (data) => {
  return {
    type: loginInfo,
    payload: data
  };
};
export const signInInfo = (data) => {
  return {
    type:signIn ,
    payload: data
  };
};