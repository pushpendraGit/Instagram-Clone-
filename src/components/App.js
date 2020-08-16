import React, { useState, useEffect } from "react";

import "./App.css";
import Post from "./Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([
    // {
    //   username: "Pushpendra Singh",
    //   caption: "Hey ! it is working properly 👊",
    //   imageUrl:
    //     "https://cdn.mos.cms.futurecdn.net/ytKr6L3ZTP4Pf2acEpzpMM-320-80.jpeg",
    // },
    // {
    //   username: "Aman",
    //   caption: "Yoo ! I am at haven 🚀",
    //   imageUrl: "https://images.indianexpress.com/2020/01/mumbai-girl.jpg",
    // },
    // {
    //   username: "Lavi",
    //   caption: "Hellooooooo!",
    //   imageUrl:
    //     "https://www.jagranimages.com/images/11_08_2019-deepika_priyanka_19479971.jpg",
    // },
  ]);

  useEffect(() => {
    db.collection("Posts").onSnapshot((snapshot) => {
      console.log(snapshot.docs.doc);
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://pngimage.net/wp-content/uploads/2018/06/font-instagram-png-2.png"
        />
      </div>

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
