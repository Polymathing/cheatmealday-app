import React from "react";

function Card(props) {
  return (
    <div className="card">

      <div>
      <img className="circle-img" src={props.img} alt="avatar_img" />
      <h2 className="name">{props.name}</h2>
      </div>
      <div className="bottom">
        <h1>Delicious!</h1>
        <p>Now stop overthink and just EAT!</p>

      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">Now stop overthink and just EAT!</p>

      </div>
    </div>
  );
}

export default Card;