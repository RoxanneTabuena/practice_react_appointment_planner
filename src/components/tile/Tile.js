import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {description.map((item)=>{
        return typeof description.item === 'object'
          ? <p className="tile">{item} : {JSON.stringify(description.item)}</p>
          : <p className="tile">{item} : {description.item}</p>
      })}
    </div>
  );
};
