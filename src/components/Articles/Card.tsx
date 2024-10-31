type articleDataProps = {
  author: string;
  content: string;
  description: string;
  source?: { id: number; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

const ArticlesCard = ({
  author,
  description,
  source,
  title,
  url,
  urlToImage,
}: articleDataProps) => {
  return (
    <a href={url} className="border border-gray-300 rounded-2xl shadow-xl">
      <div>
        <img
          src={urlToImage}
          alt="articles image"
          className="rounded-t-2xl h-64 w-full"
        />
      </div>
      <div className="px-5">
        <div>
          <h1 className="font-semibold text-lg font-serif py-3">{title}</h1>
          <p className="text-sm font-serif">{description}</p>
        </div>
        <div className="flex justify-between pt-6 pb-3">
          <p>{source?.name}</p>
          <p>{author}</p>
        </div>
      </div>
    </a>
  );
};

export default ArticlesCard;
