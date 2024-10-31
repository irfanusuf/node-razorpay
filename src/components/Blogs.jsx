import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Blogs.css";

const Blogs = () => {
  //pure javascript logic

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const res = await axios.get(url);

      console.log(res);

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    //html like syntax

    <div className="container ">
      <h1>Blogs </h1>

      <div className="blogs">
        {data.map((element) => (
          <div className="blog">
            <p> {element.id}</p>
            <p> {element.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
