import { createStore, combineReducers } from "redux";
import { add, addInTime, inTime, outTime,LoggedIn,LoggedOut,loginInfo,signIn } from "./Actions";

const initialState = [
  {
    Name: "saketh",
    Email: "saketh@gmail.com",
    Password: "Saketh@1234"
  }
];

export const addAttendanceDetails = (state = [], action) => {
  switch (action.type) {
    case LoggedIn :
      return (state = [action.payload]);
      break;
    case inTime:
      return (state = [action.payload]);
      break;
    case outTime:
      return (state = [...state,action.payload]);
      break;
    case LoggedOut :
      return (state = [action.payload]);
      break;
    default:
      return state;
  }
};

export const userDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case add:
      return [...state, action.payload];
    default:
      return state;
  }
};
export const loginReducer = (state =[], action) => {
  switch (action.type) {
    case loginInfo:
      return state=[action.payload];
    default:
      return state;
  }
};
export const signInReducer = (state =[], action) => {
  switch (action.type) {
    case signIn:
      return state=[...state,action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userDetailsReducer,
  addAttendanceDetails,
  loginReducer,
  signInReducer 

});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);