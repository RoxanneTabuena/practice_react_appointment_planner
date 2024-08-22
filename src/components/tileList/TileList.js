import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({list}) => {
  const items = list.map((info, index) =>{
    return <Tile info={info} key={index} />
  })
  return (
    <div className="list">
      {items}
    </div>
  );
};


