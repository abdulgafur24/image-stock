import { toJson } from "unsplash-js";
import { unsplash } from "../unsplash";

export const imagesByKeyword = (keyword) => {
  return unsplash.search.photos(keyword).then(toJson);
};

export const imagesByKeywordAndPage = (keyword, page) => {
  return unsplash.search.photos(keyword, page).then(toJson);
};

export const imageById = (id) => {
  return unsplash.photos.getPhoto(id).then(toJson);
};

export const collectionById = (id) => {
  return unsplash.collections.getCollectionPhotos(id, 0, 20).then(toJson);
};
