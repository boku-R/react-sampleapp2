const Example = () => {
  const clickHandler = () => {
    alert("ボタンがクリックされました");
  };
  return (
    <>
      <button onClick={clickHandler}>くりっくしてね</button>
      <button>くりっくしてね</button>
    </>
  );
};

export default Example;
