import React from "react";
const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.thumbnail_image} alt={item.id} />
      <h4 style={{ marginBottom: "5px" }}>Name: {item.event_name}</h4>
      <h4 style={{ marginBottom: "5px" }}>
        Date: {new Date(item.event_date).toDateString()}
      </h4>
      <div className="card_details">
        <h5>Likes: {item.likes}</h5>
        <h5>Views: {item.views}</h5>
        <h5>Shares: {item.shares}</h5>
      </div>
    </div>
  );
};

export default Card;
