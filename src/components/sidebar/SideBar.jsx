import React from "react";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          consequatur a illo commodi dolores reprehenderit labore expedita. A
          ratione magni maxime dignissimos? Laborum quod dolores aliquam officia
          cumque in iure.
        </p>
      </div>

      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sport</li>
          <li className="sidebar-list-item">Cinema</li>
          <li className="sidebar-list-item">Tech</li>
        </ul>
      </div>

      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-socials">
          <i className="sidebar-icon fa-brands fa-facebook"></i>
          <i className="sidebar-icon fa-brands fa-square-x-twitter"></i>
          <i className="sidebar-icon fa-brands fa-square-pinterest"></i>
          <i className="sidebar-icon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
