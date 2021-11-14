import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import "./FeedHeader.css";

function FeedHeader() {
  return (
    <header className="feed__header">
      <h2>Home</h2>
      <div className="feed__header__iconDiv">
        <AutoAwesomeIcon />
      </div>
    </header>
  );
}

export default FeedHeader;
