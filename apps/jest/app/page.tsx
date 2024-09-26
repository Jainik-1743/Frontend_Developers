import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="text-5xl">Peru</div>;<p>Button clicked: {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
