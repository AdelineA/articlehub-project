import { defer } from "react-router-dom";
import { fetchArticlesData } from "../redux/slices/articles";
import { store } from "../redux/store";

export const articlesLoader = async () => {
  const articles = await store.dispatch(fetchArticlesData()).unwrap();
  return defer({ articles });
};
