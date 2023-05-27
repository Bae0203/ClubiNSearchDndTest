import React, { SetStateAction, Dispatch } from "react";

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

const ChangeValue = (props: IChangeValue) => {
  const DeleteValue = () => {
    copy[props.BeforeContainerIndex].contents.splice(props.userIndex, 1);
  };
  const AddValue = () => {
    copy[props.containerIndex].contents.push(
      props.state[props.BeforeContainerIndex].contents[props.userIndex]
    );
  };
  let copy: IDrop[] = [...props.state];
  AddValue();
  DeleteValue();
  props.setState(copy);
};

export default ChangeValue;
