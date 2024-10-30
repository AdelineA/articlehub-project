import { defer } from "react-router-dom";
import { fetchArticleDetailData } from "../redux/slices/articleDetails";
import { store } from "../redux/store";

export const articleDetailLoader = async ({
  params: { articleId },
}: {
  params: { articleId: string };
}) => {
  const articleDetail = await store
    .dispatch(fetchArticleDetailData({ title: articleId }))
    .unwrap();
  return defer({ articleDetail });
};
