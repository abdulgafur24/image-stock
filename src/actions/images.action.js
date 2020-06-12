import { imagesByKeywordAndPage } from "../services/images";

export const SEARCH_BY_KEYWORD = "SEARCH_BY_KEYWORD";
export const GET_IMAGES_NEXT_PAGE = "GET_IMAGES_NEXT_PAGE";
export const CHANGE_APPEARANCE_TYPE = "CHANGE_APPEARANCE_TYPE";
export const LIKE_IMAGE = "LIKE_IMAGE";
export const UNLIKE_IMAGE = "UNLIKE_IMAGE";

export const likeImage = (image) => {
  return (dispatch) => {
    dispatch({
      type: LIKE_IMAGE,
      payload: image,
    });
  };
};

export const unlikeImage = (image) => {
  return (dispatch) => {
    dispatch({
      type: UNLIKE_IMAGE,
      payload: image,
    });
  };
};

export const searchByKeyword = (keyword) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_BY_KEYWORD,
      payload: keyword,
    });
  };
};

export const getImagesByKeywordAndPage = (keyword, page) => {
  return (dispatch) => {
    imagesByKeywordAndPage(keyword, page).then((json) => {
      dispatch({
        type: GET_IMAGES_NEXT_PAGE,
        payload: {
          page: page,
          list: json.results,
        },
      });
    });
  };
};

export const changeAppearanceType = (appearance) => {
  return (dispatch) => {
    localStorage.setItem("APPEARANCE_TYPE", appearance);
    dispatch({
      type: CHANGE_APPEARANCE_TYPE,
      payload: appearance,
    });
  };
};
