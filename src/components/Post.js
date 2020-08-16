import React from "react";
import Avatar from '@material-ui/core/Avatar';
import p1 from '../assets/Images/p1.jpg'

import "./Post.css";

function Post(props) {
  return (
    <div className="post">
      <div className="post__header">
      <Avatar  className="post_avatar"  alt="Pushpendra Singh" src={p1} />
      <h3>UserName</h3>
      </div>
      <img
        className="post__image"
        src="https://www.flaticon.com/premium-icon/icons/svg/560/560177.svg"
      />

      <h4 className="post__text"><strong>UserName:</strong> Wao This is wonder full</h4>
    </div>
  );
}

export default Post;
