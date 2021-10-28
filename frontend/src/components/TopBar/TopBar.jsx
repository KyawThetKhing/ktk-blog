import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./TopBar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = e => {
    dispatch({
      type: "LOGOUT"
    });
    window.location.replace("/login");
  };

  return (
    <div className="topbar">
      <div className="topbarLeft">
        <i className="topbarIcon fab fa-facebook-square"></i>
        <i className="topbarIcon fab fa-twitter-square"></i>
        <i className="topbarIcon fab fa-pinterest-square"></i>
        <i className="topbarIcon fab fa-instagram-square"></i>
      </div>
      <div className="topbarCenter">
        <ul className="topbarList">
          <li className="topbarListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topbarListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topbarRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topbarImg"
              src={PF + user.profilePic}
              alt="profile"
            />
          </Link>
        ) : (
          <ul className="topbarList">
            <li className="topbarListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topbarListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topbarSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
