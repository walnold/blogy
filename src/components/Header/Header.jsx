import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-titlesm">React & Node</span>
        <span className="header-titleLg">Blog</span>
      </div>

      <img
        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt="header-image"
        className="header-img"
      />
    </div>
  );
}

export default Header
