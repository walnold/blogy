import React from "react";
import "./topbar.css";
import { NavLink } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fa-brands fa-facebook"></i>
        <i className="top-icon fa-brands fa-square-x-twitter"></i>
        <i className="top-icon fa-brands fa-square-pinterest"></i>
        <i className="top-icon fa-brands fa-square-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li className="top-list-item">
            <NavLink to={"/profile"}>PROFILE</NavLink>
          </li>
          <li className="top-list-item">
            <NavLink to={"/posts"}>POSTS</NavLink>
          </li>
          <li className="top-list-item">
            <NavLink to={"/write"}>WRITE</NavLink>
          </li>
          <li className="top-list-item">
            <NavLink to={"/login"}>LOGOUT</NavLink>
          </li>
        </ul>
      </div>
      <div className="top-right">
        <img
          className="top-image"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="profile"
        />
        <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
