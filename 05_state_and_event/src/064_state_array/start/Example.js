import {useState} from "react"

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];

  const [nums, setNums] = useState(numArray)
// console.log(nums)

const shuffle = () => {
  const newNums = [...nums]
  // console.log(nums === newNums)
  const value = newNums.pop()
  newNums.unshift(value)
  setNums(newNums)
  // console.log(newNums)
}
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
