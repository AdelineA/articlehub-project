import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type ArticleState = {
  articles: any;
  loading: boolean;
  error?: string | null;
};
const initialState: ArticleState = {
  articles: null,
  loading: false,
  error: null,
};

export const fetchArticlesData = createAsyncThunk(
  "article/fetchArticleData",
  async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const jsonData = await response.json();
    return jsonData;
  }
);

export const articlesSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticlesData.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticlesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default articlesSlice.reducer;
