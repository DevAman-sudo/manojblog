import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clkvy7av00ngj01ta9s1sgq91/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      slug

      content {
        html
      }
      coverPhoto {
        id
        url
      }
      authers {
        id
        name
        avatar {
          url
        }
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

const article = ({ post }) => {
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
      <div className="mx-8 mt-20 min-h-screen text-white py-10">
        <div className="max-w-3xl mx-auto">
          <img
            src={post.coverPhoto.url}
            alt={post.title}
            className="w-full h-auto rounded-lg mb-6"
          />
          <h1 className="text-4xl tracking-wider text-gray-300 capitalize font-bold mb-4">
            {post.title}
          </h1>
          <div
            className="prose dark:prose-dark text-gray-300 tracking-wider text-lg"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
          <div className="flex items-center mt-4 border border-gray-700 p-2 rounded-md text-gray-300 tracking-wider">
            <img
              src={post.authers.avatar.url}
              alt={post.authers.name}
              className="w-10 h-10 rounded-full mr-2"
            />
            <p className="text-lg tracking wider bold capitalize">
              {post.authers.name}
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl tracking-widest text-gray-300 capitalize mt-20">
            More from {post.authers.name}
          </h1>
          <Link href={`/blog`}>
            <span className="text-blue-500 text-2xl">Read blog →</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default article;
