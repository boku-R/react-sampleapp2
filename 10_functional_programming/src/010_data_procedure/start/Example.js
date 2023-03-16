const Example = () => {
  // 関数型
  const nums = [1, 2, 3];
  const sum = (arr) => {
    const nums = arr;
    // let sumValue = 0;
    // for (let i = 0; i < nums.length; i++) {
    //   sumValue += nums[i];
    // }
    // nums.forEach((num) => (sumValue += num)); 
    let sumValue = nums.reduce((accu, curr)=> accu + curr);
    return sumValue;
  };

  // オブジェクト指向型
  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for (let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    },
  };

  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>状態（データ）と処理（やりたいこと）は切り離す</p>
      <p>オブジェクト思考型:{numObj.sum()}</p>
      <p>関数型:{sum(nums)}</p>
    </>
  );
};

export default Example;
