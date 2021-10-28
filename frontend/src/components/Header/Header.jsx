import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.tititudorancea.com/lib/edfiles/gm/panorama_nancy_21_crop_w4c.jpg"
        alt="header Img"
      />
    </div>
  );
}
