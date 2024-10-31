import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../components/UI/Loading";
import ArticleCard from "../components/card/article";

const Home = () => {
  const { articles }: any = useLoaderData();
  console.log(articles);
  return (
    <div className="w-full p-10 flex justify-center">
      <Suspense fallback={<Loading />}>
        <Await resolve={articles}>
          {(data) => (
            <div className="justify-center items-center w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
              {data.map(
                (article: any, index: number) =>
                  article.title !== "[Removed]" && (
                    <ArticleCard
                      key={article.id + article.title + index}
                      {...article}
                    />
                  )
              )}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default Home;
