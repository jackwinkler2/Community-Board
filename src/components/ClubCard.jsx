import React from "react";

const ClubCard = ({ image, name, description, website }) => {

  const handleClick = () => {
    window.open(website);
  };

  return (
    <div className="ClubCards">
      <img src={image} alt={"couldn't render image"} style={{ width: "100px" }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={handleClick}>Visit Website</button>
    </div>
  );
};

export default ClubCard;
