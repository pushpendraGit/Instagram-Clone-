import React from 'react';

import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
    <div className="app__header"> 
    <img className="app__headerImage" 
    src="https://pngimage.net/wp-content/uploads/2018/06/font-instagram-png-2.png" />

    </div>

    <Post />
    
    </div>
  );
}

export default App;
