import { toJson } from "unsplash-js";
import { unsplash } from "../unsplash";

export const imagesByKeyword = (keyword) => {
  return unsplash.search.photos(keyword).then(toJson);
};

export const imageById = (id) => {
  return unsplash.photos.getPhoto(id).then(toJson);
};

export const downloadImage = (json) => {
  unsplash.photos.downloadPhoto(json);
};

export const collectionById = (id) => {
  return unsplash.collections.getCollectionPhotos(id, 0, 20).then(toJson);
};
