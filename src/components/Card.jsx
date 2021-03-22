import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div>
      <img className="circle-img" src={props.img} alt="avatar_img" />
      <h2 className="name">{props.name}</h2>
      </div>
      <div className="bottom">
        <h2>Delicious!</h2>
        <p>Now stop overthink and just EAT!</p>
      </div>
    </div>
  );
}

export default Card;