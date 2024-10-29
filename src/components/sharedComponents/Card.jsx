import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";

const Card = (props) => {
  const [user, setUser] = useState("irfan usuf");

  const handleClick = () => {
    setUser("Nasir khan");
  };

  return (
    <div className="card">
      <div className="image">
        <img src="" alt="" />
      </div>

      <div className="description">
        <h2> {props.description} </h2>

        <h3> {user}</h3> 

        <div onClick={handleClick}>

            {user === "irfan usuf" ? <CiHeart/> :  <CiHeart style={{color: "red"}}/> }
        </div>
       
     
      </div>
    </div>
  );
};

export default Card;
