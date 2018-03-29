import React from "react";
import PostListItem from "./PostListItem";
import Comment from "./Comment";
import articles from "../data/articles";
import { object, number } from "prop-types";
import Err404 from "./Err404";



const PostWithComments = () => {
  window.scrollTo(0, 0);

  let postId = null;
  let customArticle = null;

  try {
    postId = +window.location.pathname.match(/\d+/)[0];
    if (postId > articles.length || postId === 0) {
      throw new Error();
    }
  } catch (err) {
    return <Err404 />;
  }

  articles.forEach((post) => {
    if (post.id === postId) {
      customArticle = post;
    }
  });

  return (
    <React.Fragment>
      <PostListItem article={customArticle} showKeyComments={false} />
      <Comment postId={postId} />
    </React.Fragment>
  );
};


PostWithComments.propTypes = {
  article: object,
  postId: number,
};






export default PostWithComments;