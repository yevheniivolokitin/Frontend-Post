import { SAVE_USERNAME } from "./types";

export const usernameSave = (text) => ({
   type: SAVE_USERNAME,
   payload: text,
});
