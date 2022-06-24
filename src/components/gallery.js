import React from "react";
import Card from "./card";


function Gallery(props) {
   console.log(props.postings)
  return (
    <div className={props.className}>
      {props.data.postings.map((data, index) => {
        return <Card className="card" data={data} key={index}></Card>;
      })}
    </div>
  );
}

export default Gallery;
