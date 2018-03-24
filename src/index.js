import React from 'react'
import { render } from 'react-dom';
import PostList from './components/PostList';
import data from './data'



render(
  <PostList post={data} />,
  document.getElementById('root')
);