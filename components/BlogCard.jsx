import Link from "next/link";
import React from "react";
import { formatDistanceToNow } from "date-fns";

const BlogCard = ({
  coverPhoto,
  title,
  content,
  date,
  slug,
  author,
  avatar,
}) => {

  const formattedDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  })

  return (
    <Link href={`/blog/${slug}`}>
      <div className="w-full md:w-96 md:h-96 p-4">
        <div className="mx-auto card-container">
          <div className="border border-gray-700 rounded-sm p-4 shadow-md h-full flex flex-col">
            <div className="flex items-center mb-4">
              <img
                src={avatar.url}
                alt="author"
                className="w-7 h-7 rounded-full"
              />
              <h1 className="mx-2 capitalize tracking-widest font-bold text-gray-300">
                {author.name}
              </h1>
            </div>

            <div className="flex mb-4">
              <div className="w-1/3 mr-2">
                <img
                  src={coverPhoto}
                  alt={title}
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>
              <div className="w-2/3">
                <h2 className="text-md text-gray-400 font-semibold mb-2 capitalize tracking-wider">
                  {title}
                </h2>
                <div
                  className="text-gray-500 text-sm line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>

            <div className="flex justify-between items-end">
              <span className="text-gray-400">{formattedDate}</span>
              <span className="text-blue-500 cursor-pointer">Read blog →</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
