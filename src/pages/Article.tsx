import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../components/UI/Loading";

const ArticlePage = () => {
  const { article } = useLoaderData() as any;

  return (
    <div className="w-full p-10 mx-auto">
      <Suspense fallback={<Loading />}>
        <Await resolve={article}>
          {(data) => (
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
              <div className="text-gray-600 text-sm mb-2">
                <span>By {data.author || "Unknown Author"}</span> |{" "}
                <span>{new Date(data.publishedAt).toLocaleDateString()}</span>
              </div>
              <img
                src={data.urlToImage}
                alt={data.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-800 mb-4">{data.description}</p>
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              <div className="mt-4 text-gray-600">
                Source:{" "}
                <a href={data.url} className="text-blue-500 hover:underline">
                  {data.source.name}
                </a>
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default ArticlePage;
