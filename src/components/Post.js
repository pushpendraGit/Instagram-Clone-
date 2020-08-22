import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Avatar from "@material-ui/core/Avatar";
import p1 from "../assets/Images/p1.jpg";

import "./Post.css";
import { db } from "./firebase";

function Post({ username, user, postId, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [commnet, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("Posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postCommnet = (event) => {
    event.preventDefault();

    db.collection("Posts").doc(postId).collection("comments").add({
      text: commnet,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setComment("");
  };
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post_avatar" alt="Pushpendra Singh" />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} />

      <h4 className="post__text">
        <strong>{username}</strong>
        {caption}
      </h4>
      {
        <div className="post__comments">
          {comments.map((item) => (
            <p>
              <strong>{item.username}</strong> {item.text}
            </p>
          ))}
        </div>
      }

      {user && (
        <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="add comments....."
            value={commnet}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            disabled={!commnet}
            className="post__button"
            type="submit"
            onClick={postCommnet}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
