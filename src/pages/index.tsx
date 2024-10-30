import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../components/UI/Loading";

const Home = () => {
  const { articles }: any = useLoaderData();
  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={articles}>
        {(data) => (
          <div>
            {data.posts.map((article: any) => (
              <div key={article.id}>{article.title}</div>
            ))}
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default Home;
