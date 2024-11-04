import { createSlice } from "@reduxjs/toolkit";

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
export const slice = (name: string, slice: any) =>
  createSlice({
    name: name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(slice.pending, (state) => {
          state.loading = true;
        })
        .addCase(slice.fulfilled, (state, action) => {
          state.loading = false;
          state.article = action.payload;
        })
        .addCase(slice.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
