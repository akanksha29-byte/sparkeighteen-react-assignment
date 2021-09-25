import React from "react";

const Selector = ({ handleSelect }) => {
  return (
    <div>
      <select className="filter" id="asc" onChange={(e) => handleSelect(e)}>
        <option hidden defaultValue>
          Low To High
        </option>
        <option value="event_date">Date</option>
        <option value="likes">likes</option>
        <option value="views">Views</option>
        <option value="shares">Share</option>
      </select>
      <select className="filter" id="desc" onChange={(e) => handleSelect(e)}>
        <option hidden>High To Low</option>
        <option value="event_date">Date</option>
        <option value="likes">likes</option>
        <option value="views">Views</option>
        <option value="shares">Share</option>
      </select>
    </div>
  );
};

export default Selector;
