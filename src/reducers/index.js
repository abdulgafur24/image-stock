import { combineReducers } from "redux";
import imagesReducer from "./images.reducer";

const appReducer = combineReducers({
  images: imagesReducer,
});

export default appReducer;
