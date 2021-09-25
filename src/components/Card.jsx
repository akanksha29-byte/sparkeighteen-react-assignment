import React from "react";
const Card = ({ item }) => {
  const date = new Date(+item.event_date);
  const trim = (str) => {
    return str.length > 10 ? str.substring(0, 10).trim() : str;
  };
  return (
    <div className="card">
      <img src={item.thumbnail_image} alt={item.id} />
      <h4 style={{ marginBottom: "5px" }}>Name: {trim(item.event_name)}</h4>
      <h5 style={{ marginBottom: "5px", color: "gray" }}>
        Date: {`${date.toLocaleString()}`}
      </h5>
      <div className="card_details">
        <h5>Likes: {item.likes}</h5>
        <h5>Views: {item.views}</h5>
        <h5>Shares: {item.shares}</h5>
      </div>
    </div>
  );
};

export default Card;
