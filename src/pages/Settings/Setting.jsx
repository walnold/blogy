import React from "react";
import "./setting.css";
import SideBar from "../../components/sidebar/SideBar";

const Setting = () => {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?a=1&b=1&s=612x612&w=0&k=20&c=u5RPl326UFf1oyrM1iLFJtqdQ3K28TdBdSaSPKeCrdc="
              alt=""
            />

            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>

          <label htmlFor="">Username</label>
          <input type="text" name="" id="" placeholder="Wal" />

          <label htmlFor="">Email</label>
          <input type="email" name="" id="" placeholder="Wa@mail.com" />

          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />

          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Setting;
