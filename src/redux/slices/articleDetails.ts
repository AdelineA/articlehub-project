import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type IndividualArticleState = {
  article: any;
  loading: boolean;
  error?: string | null;
};

const initialState: IndividualArticleState = {
  article: null,
  loading: false,
  error: null,
};

export const fetchArticleDetailData = createAsyncThunk(
  "article/fetchIndividualArticle",
  async ({ title }: { title: string }) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-09-30&sortBy=publishedAt&apiKey=ca8357cd726f4403b287d8818e931904&title=${title}`
    );
    return response.json();
  }
);

export const ArticleDetailSlice = createSlice({
  name: "individualArticle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetailData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticleDetailData.fulfilled, (state, action) => {
        state.loading = false;
        state.article = action.payload;
      })
      .addCase(fetchArticleDetailData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ArticleDetailSlice.reducer;
