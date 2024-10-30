import { configureStore } from "@reduxjs/toolkit";
import { articlesSlice } from "./slices/articles";

const { reducer: articleReducer } = articlesSlice;

export const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
