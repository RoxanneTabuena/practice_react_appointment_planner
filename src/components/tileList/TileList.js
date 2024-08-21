import React from "react";

export const TileList = (props) => {
  const list = props.list.map((item, index) =>{
    const { name } = item
    const description = item
    return <Tile name={name} description={description} key={index} />
  })
  return (
    <div>
      {list}
    </div>
  );
};
