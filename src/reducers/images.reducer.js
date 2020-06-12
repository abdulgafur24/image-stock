import {
  SEARCH_BY_KEYWORD,
  GET_IMAGES_NEXT_PAGE,
  CHANGE_APPEARANCE_TYPE,
  LIKE_IMAGE,
  UNLIKE_IMAGE,
} from "../actions/images.action";

let history = localStorage.getItem("HISTORY"),
  favorites = localStorage.getItem("FAVORITES"),
  appearance = localStorage.getItem("APPEARANCE_TYPE");

const initState = {
  appearance: appearance ? appearance : "GRID",
  request: "wallpaper",
  page: 0,
  list: [],
  history: history ? JSON.parse(history) : [],
  favorites: favorites ? JSON.parse(favorites) : {},
};

export default function (state = initState, action) {
  let favorites = {};
  switch (action.type) {
    case LIKE_IMAGE:
      favorites = {
        ...state.favorites,
        [action.payload.id]: action.payload,
      };
      localStorage.setItem("FAVORITES", JSON.stringify(favorites));
      return {
        ...state,
        favorites,
      };
    case UNLIKE_IMAGE:
      favorites = {
        ...state.favorites,
        [action.payload.id]: undefined,
      };
      localStorage.setItem("FAVORITES", JSON.stringify(favorites));
      return {
        ...state,
        favorites,
      };
    case SEARCH_BY_KEYWORD:
      let history = [...state.history, action.payload];
      if (history.length === 20) history.shift();
      localStorage.setItem("HISTORY", JSON.stringify(history));
      return {
        ...state,
        page: 0,
        list: [],
        request: action.payload,
        history,
      };
    case GET_IMAGES_NEXT_PAGE:
      return {
        ...state,
        page: action.payload.page,
        list: [...state.list, ...action.payload.list],
      };
    case CHANGE_APPEARANCE_TYPE:
      return {
        ...state,
        appearance: action.payload,
      };
    default:
      return state;
  }
}
