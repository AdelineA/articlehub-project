import { type ArticleCard } from "../../types/article";
const ArticleCard = ({
  author,
  content,
  description,
  publishedAt,
  source,
  url,
  title,
  urlToImage,
}: ArticleCard) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString();

  return (
    <div className="max-w-md border rounded overflow-hidden shadow-lg bg-white">
      <a href={url} target="_blank">
        <img
          className="w-full h-48 object-cover"
          src={urlToImage}
          alt={title}
        />
      </a>

      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          <a href={url} target="_blank" className="hover:underline">
            {title}
          </a>
        </h2>

        <p className="text-sm text-gray-500 mb-4">{description}</p>

        <div className="flex justify-between items-center text-gray-600 text-sm">
          <span>By {author || "Unknown Author"}</span>
          <span>{formattedDate}</span>
        </div>

        <p className="mt-4 text-gray-700 text-sm line-clamp-3">{content}</p>

        <div className="mt-4 text-gray-500 text-xs">Source: {source.name}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
