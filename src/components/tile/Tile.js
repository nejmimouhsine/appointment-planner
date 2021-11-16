import React from "react";

export const Tile = ({ id, tile }) => {
  return (
    <div className="tile-container" key={id}>
      {Object.values(tile).map((value, index) => (
        <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};
