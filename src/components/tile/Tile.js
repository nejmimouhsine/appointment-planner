import React from "react";

export const Tile = ({ id, data }) => {
  return (
    <div className="tile-container" key={id}>
      <p className="tile-title">{data.name || data.title}</p>
      <p className="tile">{data.phone || data.date}</p>
      <p className="tile">{data.email || data.time}</p>
      {data.contact && <p className="tile">{data.contact}</p>}
    </div>
  );
};
