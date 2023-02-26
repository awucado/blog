import React from "react";
import { colors } from "../data/color";
import { getReadingTime } from "../lib/readingtime";
import formatDistance from "date-fns/formatDistance/index.js";

export const PostHead = ({ post }) => {
  return (
    <div className="items-center flex mb-2 opacity-60 text-white text-sm">
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
        className="opacity-60 hover:opacity-80 w-full rounded-lg duration-100 flex relative flex-col "
      >
        <h2 className="  text-white font-medium mb-1 text-2xl">
          {post.data.title}
        </h2>
        <PostHead mb={3} post={post} />
      </div>
    </a>
  );
}
