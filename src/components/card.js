import React from "react";

function Card(props) {
  return (
    <div className={props.className} key={props.key}>
      <img src={props.data.imageURL} alt={props.data.description}></img>
      <a href="/">{props.data.description}</a>
      <p>{props.data.price}</p>
    </div>
  );
}

export default Card;
