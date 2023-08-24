import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Image from "next/image";
import BlogCard from "../../components/BlogCard";
import Loading from "../../components/Loading";

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
      const filtered = data.posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, data]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
  }, []);

  return (
    <>
       {isLoading && <Loading />}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <div className="mt-20 mx-4">
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
        {filteredPosts.map((post, index) => (
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
    </>
  );
}

export default HomePage;
