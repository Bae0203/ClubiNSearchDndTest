import React from "react";
import { useDrop } from "react-dnd";
const ItemTypes = {
  BOX: "box",
};

const Save = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div ref={drop} style={{ padding: "1rem", backgroundColor }}>
      {isActive ? "Release to drop" : "Drag a box here"}
    </div>
  );
};

export default Save;
