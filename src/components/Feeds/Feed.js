import React from "react";
import FeedHeader from "../FeedHeader/FeedHeader";
import TweetBox from "../TweetBox/TweetBox";

import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <FeedHeader />
      {/* TweetBox */}
      <TweetBox />
    </div>
  );
}

export default Feed;
