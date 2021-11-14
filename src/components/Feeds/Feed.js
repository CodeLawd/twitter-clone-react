import React from "react";
import FeedHeader from "../FeedHeader/FeedHeader";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";

import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <FeedHeader />

      {/* TweetBox */}
      <TweetBox />

      {/* {Post} */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  );
}

export default Feed;
