import { createAsyncThunk } from "@reduxjs/toolkit";
import { slice } from "../slice";

export const fetchArticleDetailData = createAsyncThunk(
  "article/fetchIndividualArticle",
  async ({ title }: { title: string }) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}&title=${title}`
    );
    return response.json();
  }
);

export default slice("individualArticle", fetchArticleDetailData).reducer;
