import React, { useEffect, useState } from "react";
import "./App.css";
import { Typography } from "@mui/material";

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data.posts));
  }, []);
  console.log(post);
  return (
    <>
      <Typography variant="h5" color={"green"}>
        Post Title
      </Typography>
      <div className="App">
        {post.map((item, index) => {
          return (
            <div style={{ marginTop: "5px" }} key={index}>
              {item.title}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
