import React from "react";

export const TileList = ({contacts}) => {
  const list = contacts.map((contact, index) =>{
    const { name } = contact
    const description = contact
    return <Tile name={name} description={description} key={index} />
  })
  return (
    <div>
      {list}
    </div>
  );
};
