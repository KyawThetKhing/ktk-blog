import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { Context } from "../../context/Context";

export default function SideBar() {
  const [category, setCategory] = useState([]);

  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get("/categories");
      console.log("Res", res);
      setCategory(res.data);
    };
    getCategory();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={PF + user?.profilePic} alt="" className="sidebarImg" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          accumsan felis.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
          {category.map((cat, index) => (
            <>
              <Link key={index} to={`/?cat=${cat.name}`} className="link">
                <li className="sidebarListItem">{cat.name}</li>
              </Link>
            </>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
