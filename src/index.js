import React from "react";
import { render } from "react-dom";
import PostList from "./components/PostList";
import articles from "./data/articles";
import PostListItem from "./components/PostListItem";
import PostComments from "./components/PostComment";



render(
  <PostList post={articles} />,
  document.getElementById("root")
);
