import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return data.map((info, index) => <Tile key={index} id={index} data={info} />);
};
