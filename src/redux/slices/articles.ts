import { createAsyncThunk } from "@reduxjs/toolkit";
import { slice } from "../slice";

export const fetchArticlesData = createAsyncThunk(
  "article/fetchArticleData",
  async () => {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const { articles } = await response.json();
    return articles;
  }
);

export default slice("article", fetchArticlesData).reducer;
