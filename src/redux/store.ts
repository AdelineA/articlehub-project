import { configureStore } from "@reduxjs/toolkit";
import { articleSlice } from "./reducers/articleSlice";

const { reducer: articleReducer } = articleSlice;

export const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
