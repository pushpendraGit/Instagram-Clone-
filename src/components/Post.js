import React from "react";
import Avatar from "@material-ui/core/Avatar";
import p1 from "../assets/Images/p1.jpg";

import "./Post.css";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post_avatar" alt="Pushpendra Singh" src={p1} />
        <h3>{username}</h3>
      </div>
      <img
        className="post__image"
        src={imageUrl}
      />

      <h4 className="post__text">
        <strong>{username}</strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
