// import { setRef } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
("use client");

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     console.log(response);
    //     setData(response);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //     setLoading(false);
    //   });

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  if (loading) return <div>loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>ToDo Title</h2>
      <ul>
        {data.data.map((post) => (
          <li key={post.id}>{post.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
