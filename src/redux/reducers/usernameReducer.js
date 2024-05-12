import { SAVE_USERNAME } from "../actions/types";
const storedUsername = localStorage.getItem("username");
const initialState = {
   username: storedUsername ? storedUsername : "",
};

const usernameReducer = (state = initialState, action) => {
   switch (action.type) {
      case SAVE_USERNAME:
         console.log(action.payload);
         return {
            ...state,
            username: [...state.username, action.payload],
         };
      default:
         return state;
   }
};

export default usernameReducer;
