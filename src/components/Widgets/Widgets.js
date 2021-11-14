import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="codelawd"
          options={{ height: 400 }}
        />
        <TwitterTweetEmbed tweetId="1448580802783158277" />
        <TwitterShareButton
          url={"https://facebook.com/osuya.joshua.33"}
          options={{ text: "#reactjs is awesome", via: "codelawd" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
