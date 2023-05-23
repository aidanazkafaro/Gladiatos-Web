import React from 'react';
import { Link } from 'react-router-dom';
const ArticlePreview = ({ article, maxLines = 3 }) => {
  const { author, date, title, content, tag } = article;
  const getPreviewContent = () => {
    const lines = content.split('\n');
    const previewLines = lines.slice(0, maxLines);
    const previewContent = previewLines.join('\n');

    if (lines.length > maxLines) {
      return `${previewContent}...`;
    }

    return previewContent;
  };

  return (
    <Link to={`/articles/${article.id}`}>
      <div className="bg-blue-100 p-4 rounded-md mb-4 w-full md:w-3/4 lg:1/2 xl:1/3 h-fit md:h-60 lg:h-52 mx-auto ">
        <h2 className="text-xl font-bold mb-2 pb-2 border-b-2 border-blue-300">
          {title}
        </h2>
        <div className="mb-4 flex-wrap items-center">
          <p className=" text-gray-400 mb-4 inline text-xs md:text-sm w-1/3">
            {author}
          </p>
          <p className=" text-gray-400 mb-2 inline text-xs md:text-sm mx-2">
            •
          </p>
          <p className=" text-gray-400 mb-2 inline text-xs md:text-sm ">
            {date}
          </p>
          <p className=" text-gray-400 mb-2 inline text-xs md:text-sm mx-2">
            •
          </p>
          <p className="text-white mb-2 w-fit md:inline text-xs md:text-sm md:mx-1 rounded-lg bg-blue-500 px-2 py-1">
            {tag}
          </p>
        </div>
        <p className="text-gray-800 overflow-hidden max-h-[calc(1.5em*3)] line-clamp-3 overflow-ellipsis">
          {getPreviewContent()}
        </p>
      </div>
    </Link>
  );
};

export default ArticlePreview;
