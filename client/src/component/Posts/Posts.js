import React from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <Post />
    </>
  );
};

export default Posts;
