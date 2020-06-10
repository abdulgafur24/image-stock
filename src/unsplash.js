import Unsplash from "unsplash-js";

export const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_UNSPLAH_SECRET,
  timeout: 500,
});
