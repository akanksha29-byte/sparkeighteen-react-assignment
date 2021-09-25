import "./style.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Selector from "./components/Selector";
const urls = [
  "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e",
  "http://www.mocky.io/v2/59ac28a9100000ce0bf9c236",
  "http://www.mocky.io/v2/59ac293b100000d60bf9c239",
];
const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      try {
        const result = await fetch(`${urls[currentPage]}`);
        const data = await result.json();
        setPosts(data.posts);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchApi();
    setLoading(false);
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < urls.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSelect = (e) => {
    const select = e.target.value;
    const copy = [...posts];
    if (select === "likes") {
      copy.sort(function (a, b) {
        return a.likes - b.likes;
      });
    } else if (select === "event_date") {
      copy.sort((a, b) => a.event_date - b.event_date);
    } else if (select === "views") {
      copy.sort((a, b) => a.views - b.views);
    } else if (select === "shares") {
      copy.sort((a, b) => a.shares - b.shares);
    }
    if (e.target.id === "desc") {
      copy.reverse();
    }
    setPosts(copy);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <div className="header-container">
        <Selector handleSelect={handleSelect} />
        <Pagination
          currentPage={currentPage}
          handleNext={handleNext}
          handlePrev={handlePrev}
          limit={urls.length - 1}
        />
      </div>

      <div className="main-container">
        {posts.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
