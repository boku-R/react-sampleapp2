import EffectDemo from "./component/EffectDemo";
import LifecycleDemo from "./component/LifecycleDemo";

const Example = () => {
  return (
    <>
      <div>
        <h3>Class lifecycle</h3>
        <div id="demo1">
          <LifecycleDemo />
        </div>
        <h3>useEffect</h3>
        <div id="demo2">
          <EffectDemo />
        </div>
      </div>
    </>
  );
};

export default Example;
