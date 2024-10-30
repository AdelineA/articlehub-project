import { ArticleDetailSlice } from "./articleDetails";
import { articlesSlice } from "./articles";

// export const { reducer: articleReducer } = articlesSlice;
// export const { reducer: articleDetailReducer } = ArticleDetailSlice;
export default {
  articles: articlesSlice.reducer,
  articleDetail: ArticleDetailSlice.reducer,
};
