import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-3xl font-bold underline">Hello world!</p>
    </>
  );
};

export default App;
