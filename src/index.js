import React from "react";
import { render } from "react-dom";
import PostList from "./components/PostList";
import articles from "./data/articles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostWithComments from "./components/PostWithComments";

import "./style/customNormalizer.css";
import "./style/pageErr.css";
import Err404 from './components/Err404';


const App = () => (

  <BrowserRouter >
    <div>
      <Switch>

        <Route exact path="/" component={() => (
          <PostList post={articles} />
        )} />

        <Route path="/comments" component={PostWithComments} />

        <Route exact path="error404" component={Err404} />

      </Switch>
    </div>
  </BrowserRouter >
);


render(
  <App />,
  document.getElementById("root")
);