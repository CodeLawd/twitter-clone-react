import React from "react";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
// import AnalyticsIcon from "@mui/icons-material/Analytics";
import postImg from "../../images/sdk.png";

import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar className="post__image" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3> Alexander Joshua</h3>
            <VerifiedIcon className="post__badge" />
            <span className="post__headerSpecial">@codelawd</span>
          </div>
          <div className="post__headerDescription">
            <p>
              Building a Twitter Clone with React, Material UI and Firebase is
              just so coooool ❤️👌
            </p>
          </div>
        </div>
        <img alt="post_image" className="post__image" src={postImg} />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <ShareIcon fontSize="small" />
          {/* <AnalyticsIcon fontSize="small" /> */}
        </div>
      </div>
    </div>
  );
}

export default Post;
