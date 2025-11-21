import React from "react";
import "./posts.css";
import PostItem from "../post/PostItem";

const Posts = () => {
  return (
    <div className="posts">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
};

export default Posts;
