import { defer } from "react-router-dom";
import { fetchArticlesData } from "../redux/reducers/articleSlice";
import { store } from "../redux/store";

export const homeLoader = async () => {
  const articles = await store.dispatch(fetchArticlesData()).unwrap(); // Wait for data to load
  return defer({ articles });
};
