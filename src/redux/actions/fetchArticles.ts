import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
} from "./actionTypes";

export const fetchArticles = createAsyncThunk(
  "data/fetchData",
  async (url: string) => {
    const response = await fetch(url);
    return response.json();
  }
);

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLES_BEGIN,
});

export const fetchArticlesSuccess = (articles) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: { articles },
});

export const fetchArticlesFailure = (error) => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: { error },
});
