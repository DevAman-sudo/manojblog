import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Image from "next/image";
import BlogCard from "./BlogCard";
import Link from "next/link";

const GET_DATA = gql`
  {
    posts {
      title
      datePublished
      slug
      content {
        html
      }
      coverPhoto {
        url
        createdAt
      }
    }
    authers {
      id
      name
      avatar {
        url
      }
    }
  }
`;

function HomePage() {
  const { loading, error, data } = useQuery(GET_DATA);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredPosts(data.posts); // Initialize filtered posts with all posts
    }
  }, [data]);

  useEffect(() => {
    // Filter posts based on the search term
    if (data) {
      const filtered = data.posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, data]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

    <div className="my-20 mx-4">
      <div className="">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-gray-400 w-full md:w-[40%] py-4 px-4 pr-10 tracking-widest rounded-sm focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute top-1/2 transform -translate-y-1/2 right-3">
            {/* Insert your SVG search icon here */}
            {/* Example SVG search icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col md:flex-row ">
        {filteredPosts.slice(0, 3).map((post, index) => (
          <BlogCard
            key={post.title}
            coverPhoto={post.coverPhoto.url}
            title={post.title}
            content={post.content.html}
            date={post.datePublished}
            slug={post.slug}
            author={data.authers[0]}
            avatar={data.authers[0].avatar}
          />
        ))}
      </div>
      <Link href="/blog">
        <span className="text-blue-500 cursor-pointer border border-gray-400 p-2 mx-4 rounded-sm w-32">
          Read More →
        </span>
      </Link>
      </div>
    </>
  );
}

export default HomePage;
