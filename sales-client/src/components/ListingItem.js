import React from "react";
import "../css/listitem.css";

const ListingItem = props => {
  console.log(props.listing);
  const {
    author,
    title,
    vehicle_make,
    vehicle_model,
    vehicle_year,
    vehicle_color,
    img_url
  } = props.listing;
  return (
    <div className="card">
      <img src={img_url} alt="car" style={{ width: "100%" }} />
      <div className="text-container">
        <h4>
          <b>
            {title}
          </b>
        </h4>
        <p>
          {vehicle_make}
        </p>
        <p>
          {vehicle_model}
        </p>
        <p>
          {vehicle_year}
        </p>
        <p>
          {vehicle_color}
        </p>
      </div>
    </div>
  );
};

export default ListingItem;
