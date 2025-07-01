import React from "react";
const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data?.img} alt={data?.name} style={{ width: "50px" }} />
      <h3>{data?.name}</h3>
      <p>Price: ${data?.price}</p>
      <p>MRP: ${data?.mrp}</p>
    </div>
  );
};

export default Card;
