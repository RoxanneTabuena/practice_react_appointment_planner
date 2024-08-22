import React from "react";

export const Tile = ({info},{title}) => {
  console.log(title)
 let  tile = []  
 Object.values(info).forEach((value)=>{
  if(typeof value === "object"){
    const contact = Object.values(value);
    const nameStr= `Name: ${contact[0]}`
    const phoneStr= `Phone: ${contact[1]}`
    const emailStr= `Email: ${contact[2]}`
     tile.push(<p>{nameStr}</p>)
     tile.push(<p>{phoneStr}</p>)
     tile.push(<p>{emailStr}</p>)
  }else{
     tile.push(<p>{value}</p>)
  }
 })
  return (
    <div className="tile-container">
        <p className="tile-title">{tile[0]}</p>
        {tile.slice(1)}
    </div>
  );
};