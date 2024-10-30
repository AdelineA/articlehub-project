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
    const response = await fetch(import.meta.env.VITE_API_URL);
    const { articles } = await response.json();
    return articles;
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
