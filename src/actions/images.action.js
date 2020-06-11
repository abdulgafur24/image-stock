import { imagesByKeyword } from "../services/images";

export const GET_IMAGES = "GET_IMAGES";
export const GET_IMAGES_NEXT_PAGE = "GET_IMAGES_NEXT_PAGE";

export const getImagesByKeyword = (keyword) => {
  return (dispatch) => {
    imagesByKeyword(keyword).then((json) => {
      console.log(json);
      dispatch({
        type: GET_IMAGES,
        payload: json.results,
      });
    });
  };
};
