import React, { Dispatch, SetStateAction } from "react";
import { useDrag } from "react-dnd";
import ChangeValue from "../../util/ChangeValue";

interface Props {
  index: number;
}

interface Ia2 {
  name: string;
  phoneNumber: string;
  introduce: string;
  index: number;
  beforeindex: number;
  ChangeValue: {
    state: IDrop[];
    setState: Dispatch<SetStateAction<IDrop[]>>;
  };
}

interface Ia {
  name: string;
  phoneNumber: string;
  introduce: string;
}

interface IDrop {
  title: string;
  contents: Ia[];
}

interface IChangeValue {
  state: IDrop[];
  setState: Dispatch<SetStateAction<IDrop[]>>;
  containerIndex: number;
  userIndex: number;
  BeforeContainerIndex: number;
}

const Box = (props: Ia2) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    item: { name: props.name },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
    end: (item, monitor) => {
      const a = monitor.getDropResult<Props>();
      if (item && a) {
        ChangeValue({
          state: props.ChangeValue.state,
          setState: props.ChangeValue.setState,
          containerIndex: a.index,
          userIndex: props.index,
          BeforeContainerIndex: props.beforeindex,
        });
      }
    },
  }));
  return (
    <div
      style={{ backgroundColor: "tomato", width: "6rem", height: "6rem" }}
      ref={drag}
    >
      <p>{props.name}</p>
      <p>{props.phoneNumber}</p>
      <p>{props.introduce}</p>
    </div>
  );
};

export default Box;
