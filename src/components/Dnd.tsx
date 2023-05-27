// import React from "react";
// import Box from "./Dustbin/Box";
// import Save from "./Dustbin/Save";
// import Example from "./simple/example";

import { useState, Dispatch, SetStateAction } from "react";
import Box from "./custom/Box";
import DropBox from "./custom/DropBox";

interface Ia {
  name: string;
  phoneNumber: string;
  introduce: string;
}

interface IDrop {
  title: string;
  contents: Ia[];
}

const Dnd = () => {
  const [a1, b1] = useState<IDrop>({
    title: "1차 면접",
    contents: [
      { name: "현수", phoneNumber: "0", introduce: "ㄱㄱ" },
      { name: "현욱", phoneNumber: "1", introduce: "?" },
      { name: "현지", phoneNumber: "2", introduce: "ㅇㅇ" },
    ],
  });
  const [a2, b2] = useState<IDrop>({
    title: "최종 합격",
    contents: [
      { name: "경민", phoneNumber: "55", introduce: "ㅎㅇ" },
      { name: "수현", phoneNumber: "44", introduce: "ㅂㅇ" },
      { name: "아영", phoneNumber: "606", introduce: "ㅎㅇ?" },
      { name: "완규", phoneNumber: "777", introduce: "ㅎㅇ!" },
      { name: "지석", phoneNumber: "010", introduce: "ㅂㅂ" },
    ],
  });

  const [value, setValue] = useState<IDrop[]>([a1, a2]);
  return (
    <>
      {/* <div>
        <Save></Save>
      </div>
      <div>
        <Box name="1" />
        <Box name="2" />
        <Box name="3" />
      </div> */}
      {/* <div>
        <Example></Example>
      </div> */}
      <div>
        {value.map((val, index1) => {
          return (
            <DropBox key={index1} index={index1}>
              <>
                <p>{val.title}</p>
                {val.contents.map((val, index2) => {
                  return (
                    <Box
                      key={index2}
                      name={val.name}
                      phoneNumber={val.phoneNumber}
                      introduce={val.introduce}
                      index={index2}
                      beforeindex={index1}
                      ChangeValue={{ state: value, setState: setValue }}
                    ></Box>
                  );
                })}
              </>
            </DropBox>
          );
        })}
      </div>
    </>
  );
};

export default Dnd;
