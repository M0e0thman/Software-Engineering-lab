// my_state.js

import React, { useState } from 'react';

const MyState = () => {
  const [myScore, setMyScore] = useState(0);
  const [myCount, setMyCount] = useState(0);

  const incrementScore = () => {
    setMyScore(myScore + 1);
  };

  const incrementCount = () => {
    setMyCount(myCount + 1);
  };

  return {
    myScore,
    myCount,
    incrementScore,
    incrementCount,
  };
};

export default MyState;
