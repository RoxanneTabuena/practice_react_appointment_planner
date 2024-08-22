import React from "react";

export const Tile = ({info , title}) => {
 let  tile = Object.values(info).map((value)=>{
  if(typeof value === "object"){
    const [name, phone, email ] = Object.values(value);
    return(
      <div>
        <p>{name}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    )
  }else{
    return <p>{value}</p>
  }
 })
  return (
    <div className="tile-container">
        <p className="tile-title">{tile[0]}</p>
        {tile.slice(1)}
    </div>
  );
};