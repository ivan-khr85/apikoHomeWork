import React from "react";
import { render } from "react-dom";
import PostList from "./components/PostList";
import articles from "./data/articles";

render(
  <PostList post={articles} />,
  document.getElementById("root")
);
