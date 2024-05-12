import { SAVE_USERNAME } from "../actions/types";

const initialState = {
   username: [],
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
