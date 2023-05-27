import React from "react";
import { useDrop } from "react-dnd";

const DropBox = ({
  children,
  index,
}: {
  children: JSX.Element;
  index: number;
}) => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: "BOX",
    drop: () => ({ index: index }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop,
      endDrop: monitor.getDropResult(),
    }),
  }));
  return (
    <div
      style={{ backgroundColor: "blue", padding: "1rem", margin: "1rem" }}
      ref={drop}
    >
      {children}
    </div>
  );
};

export default DropBox;
