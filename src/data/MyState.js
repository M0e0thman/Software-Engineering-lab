import React, { useState } from 'react';

const MyState = () => {
  const [state, setState] = useState({
    myScore: 0,
    myCount: 0,
  });

  const increment = (property) => {
    setState((prevState) => ({
      ...prevState,
      [property]: prevState[property] + 1,
    }));
  };

  return (
    <div>
      <p>My Score: {state.myScore}</p>
      <p>My Count: {state.myCount}</p>
      <button onClick={() => increment('myScore')}>Increment Score</button>
      <button onClick={() => increment('myCount')}>Increment Count</button>
    </div>
  );
};

export default MyState;
