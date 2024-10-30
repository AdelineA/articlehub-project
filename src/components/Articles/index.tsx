import ArticlesCard from "./Card";

const Articles = ({ articles }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {articles?.map((article: any, index: number) => (
        <ArticlesCard key={index} {...article} />
      ))}
    </div>
  );
};

export default Articles;
