import { useEffect, useState } from "react";

const FetchPosts = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();

    setList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul style={{ textAlign: "left" }}>
      {list.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default FetchPosts;
