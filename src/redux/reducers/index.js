import { combineReducers } from "redux";
import usernameReducer from "./usernameReducer";

const rootReducer = combineReducers({
   username: usernameReducer,
});

export default rootReducer;
