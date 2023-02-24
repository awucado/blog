import React from "react";
import { colors } from "../data/color";
import { getReadingTime } from "../lib/readingtime";
import formatDistance from "date-fns/formatDistance";

export const PostHead = ({ post }) => {
  return (
    <div className="items-center flex mb-2 text-gray-500 text-sm">
      {/* <time dateTime={date} color="inherit">
        {date}
      </time> */}
      <p>
        {formatDistance(new Date(post.data.pubDate), new Date(), {
          addSuffix: true,
        })}
      </p>
      <div className="mx-2 color-inherit"> ·</div>
      <p className="color-inherit">{getReadingTime(post.body)} min read</p>
    </div>
  );
};

export function PostList({ post }) {
  return (
    <a href={`/${post.slug}/`} className="no-underline w-full">
      <div
        style={{
          boxShadow:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
        }}
        className="w-full rounded-lg duration-150 flex relative flex-col px-12 py-5 hover:scale-105"
      >
        <PostHead mb={3} post={post} />
        <h2 className="font-bold text-black mb-1 text-2xl">
          {post.data.title}
        </h2>
        <p className="text-gray-600 text-lg">{post.data.description}</p>
      </div>
    </a>
  );
}
