import React from "react";
import "./singlepost.css";

const SinglePost = () => {
  return (
    <div className="singlepost">
      <div className="singlepostWrapper">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="singlepostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlepostEdit">
            <i className="singlepostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlepostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlepostAuthor">
            Author: <b>Walter</b>
          </span>
          <span className="singlepostDate">1 hr ago</span>
        </div>
        <p className="singlepostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          quo! Autem odio temporibus dignissimos ipsum atque delectus, saepe
          modi, consequatur neque officia facilis sed numquam amet natus quis
          nulla enim iusto, soluta inventore ratione hic dicta sit maxime quos!
          Eos perferendis et maiores veritatis similique iste labore libero,
          voluptate molestias fugit, corrupti in? A reprehenderit impedit ipsa
          neque cumque voluptatum debitis voluptas quae magnam. Nostrum
          accusamus facilis eos voluptatem culpa voluptates voluptatum molestiae
          veniam similique rem, doloremque qui sit, reiciendis minima officia
          quisquam tenetur rerum esse veritatis sed praesentium vitae
          exercitationem. Cupiditate, cum id expedita nulla, error officiis
          libero porro repudiandae, ab totam exercitationem animi sapiente quis
          deserunt non dolor vitae impedit fugiat debitis accusamus! Maiores
          dolorum explicabo praesentium eum doloremque ab. Rem dicta suscipit
          accusantium, harum rerum, praesentium deleniti magni dolor id, eum
          adipisci perspiciatis repellat ullam vitae nihil animi hic natus.
          Omnis deserunt repellendus sit necessitatibus, unde molestias corrupti
          asperiores distinctio? Eum laborum autem delectus aspernatur dolores.
          Illum aspernatur magnam consectetur cupiditate ut dolorum tempore
          saepe voluptates consequatur repellat sunt possimus, illo tempora, id
          praesentium fugiat doloremque sapiente ullam optio! Voluptate ut velit
          itaque modi iste distinctio? Sunt, doloremque ab. Odit et placeat,
          asperiores ad amet provident ipsam cum, accusamus illum ratione culpa
          eius porro harum quaerat dolores nam cumque reprehenderit maiores
          molestias. Corrupti dolor earum sed ullam fuga amet provident
          exercitationem accusantium odio dolore quasi eum magni dignissimos
          deserunt voluptatem consequatur error quidem suscipit omnis rem
          voluptas, ad cum. Enim vel commodi soluta delectus vero velit officia
          deleniti accusantium quidem dolore itaque debitis omnis tempora alias
          illum optio amet praesentium, sequi suscipit fugiat officiis. Sint
          dignissimos minus id perferendis dolorum commodi, magni voluptate.
          Eveniet esse omnis distinctio temporibus magni? Aliquam, sed similique
          voluptatem cum minus exercitationem repudiandae! Officiis aliquid
          eaque odio adipisci excepturi repudiandae magni veritatis dolor?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
