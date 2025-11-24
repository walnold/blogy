import React from "react";
import "./write.css";
function Write() {
  return (
    <div className="write">
      <img
        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            name=""
            id="fileInput"
            style={{ display: "none" }}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your Story..."
            className="writeInput writeText"
          ></textarea>
        </div>

        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
