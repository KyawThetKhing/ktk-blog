import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import "./Home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts/${search}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        {posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <h3 className="noPost">No Posts Available</h3>
        )}
        <SideBar />
      </div>
    </>
  );
}
