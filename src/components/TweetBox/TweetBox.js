import React from "react";
import { Button, Avatar } from "@mui/material";

import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input placeholder="What's happening? " />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Image URL"
        />

        <Button className="tweetBox__tweetBtn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
