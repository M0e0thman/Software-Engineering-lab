import React from 'react';
import my_state from './my_state';

class Score extends React.Component {
  render() {
    const { my_score, my_count } = my_state;

    return (
      <>
        <h1>Points scored</h1>
        <h2>You Scored {my_score} out of {my_count}</h2>
        {my_score < (2 / 3) * my_count ? <p>You failed</p> : null}
        {my_score === (2 / 3) * my_count ? <p>You passed but not great</p> : null}
        {my_score === my_count ? <p>Congratulations! You're a Natural</p> : null}
        <br />
        <br />
      </>
    );
  }
}

export default Score;
