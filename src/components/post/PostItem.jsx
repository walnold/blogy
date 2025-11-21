import React from "react";
import "./postItem.css";
function PostItem() {
  return (
    <div className="post">
      <img
        src="https://media.istockphoto.com/id/2150512881/photo/telephone-mobile-phone-hand-smart-phone-template-social-media-social-media-marketing-social.webp?a=1&b=1&s=612x612&w=0&k=20&c=6GejRKKD5H8qFb25uYSV4wvdoL37ZSUuUFjoAol8KiU="
        alt=""
        className="post-img"
      />
      <div className="post-info">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="post-date">1hr ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
          consectetur quaerat repellat consequatur, ab sequi corporis corrupti
          porro unde nulla tenetur eos ducimus praesentium? Totam maiores
          reprehenderit sapiente veritatis assumenda?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, et. A fugit alias, saepe adipisci maxime quidem aliquid blanditiis consequuntur quia facere nemo commodi cum, dolor reiciendis, excepturi quod ea!
        </p>
      </div>
    </div>
  );
}

export default PostItem;
