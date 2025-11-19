import React from 'react'
import './topbar.css'
const TopBar = () => {
  return (
    <div className="top">
      <div className="top-left">
        <i class="top-icon fa-brands fa-facebook"></i>
        <i class="top-icon fa-brands fa-square-x-twitter"></i>
        <i class="top-icon fa-brands fa-square-pinterest"></i>
        <i class="top-icon fa-brands fa-square-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">HOME</li>
          <li className="top-list-item">ABOUT</li>
          <li className="top-list-item">CONTACT</li>
          <li className="top-list-item">WRITE</li>
          <li className="top-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="top-right">
        <img className='top-image'
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="profile"
        />
        <i class="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar
