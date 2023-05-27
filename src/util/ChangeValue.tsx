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

const DeleteValue = ({
  copy,
  props,
}: {
  copy: IDrop[];
  props: IChangeValue;
}) => {
  copy[props.BeforeContainerIndex].contents.splice(props.userIndex, 1);
};
const AddValue = ({ copy, props }: { copy: IDrop[]; props: IChangeValue }) => {
  copy[props.containerIndex].contents.push(
    props.state[props.BeforeContainerIndex].contents[props.userIndex]
  );
};

const ChangeValue = (props: IChangeValue) => {
  console.log(
    props.userIndex,
    props.BeforeContainerIndex,
    props.containerIndex
  );

  let copy: IDrop[] = [...props.state];
  console.log("Before", copy);
  AddValue({ copy, props });
  console.log("Add ", copy);
  DeleteValue({ copy, props });
  console.log("Delete ", copy);
  props.setState(copy);
};

export default ChangeValue;
