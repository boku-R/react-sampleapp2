import { useState } from "react";

const Example = () => {
  let [val, setVal] = useState();
  // console.log(valArr);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          // const setFn = valArr[1];
          setVal(e.target.value);
        }}
      />
      = {val}
    </>
  );
};

export default Example;
