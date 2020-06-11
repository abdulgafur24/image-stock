import { GET_IMAGES, GET_IMAGES_NEXT_PAGE } from "../actions/images.action";

const initState = [];

export default function (state = initState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return action.payload;
    case GET_IMAGES_NEXT_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
