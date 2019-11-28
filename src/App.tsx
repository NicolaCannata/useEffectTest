import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const App: React.FC = () => {
  const [data, setData] = useState([]);

  const [query, setQuery] = useState("posts");

  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${query}?_start=0&_limit=10`
    );
    setData(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  console.log(data);

  return (
    <div>
      <button className="posts" onClick={() => setQuery("posts")}>
        POSTS
      </button>
      <button onClick={() => setQuery("albums")}>ALBUMS</button>
      <button onClick={() => setQuery("photos")}>PHOTOS</button>
      <button onClick={() => setQuery("todos")}>TODOS</button>
      <hr />
      {data.map(data => (
        //@ts-ignore
        <p>{data.title}</p>
      ))}
    </div>
  );
};

export default App;
