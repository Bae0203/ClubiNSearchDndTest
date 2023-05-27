import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const Box = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div ref={drop}>
      <div></div>
    </div>
  );
};

export default Box;
