import React from "react";
import { useDrag } from "react-dnd";

const ItemTypes = {
  BOX: "box",
};

interface InameProps {
  name: string;
}

const Box = ({ name }: InameProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<InameProps>();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ width: "5rem", height: "5rem", backgroundColor: "green" }}
    >
      {name}
    </div>
  );
};

export default Box;
