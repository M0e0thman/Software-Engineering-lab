import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Score from './Score';

describe('Score Component', () => {
  test('renders score and appropriate messages', () => {
    // Mock my_state with test values
    jest.mock('./my_state', () => ({
      my_score: 2,
      my_count: 3,
    }));

    const { my_score, my_count } = require('./my_state');
    render(<Score />);

    // Check if the Score component renders the score and messages correctly
    expect(screen.getByText(/Points scored/i)).toBeInTheDocument();
    expect(screen.getByText(`You Scored ${my_score} out of ${my_count}`)).toBeInTheDocument();

    // Check if failure message is displayed
    if (my_score < (2 / 3) * my_count) {
      expect(screen.getByText(/You failed/i)).toBeInTheDocument();
    } else {
      expect(screen.queryByText(/You failed/i)).not.toBeInTheDocument();
    }

    // Check if passed but not great message is displayed
    if (my_score === (2 / 3) * my_count) {
      expect(screen.getByText(/You passed but not great/i)).toBeInTheDocument();
    } else {
      expect(screen.queryByText(/You passed but not great/i)).not.toBeInTheDocument();
    }

    // Check if congratulations message is displayed
    if (my_score === my_count) {
      expect(screen.getByText(/Congratulations! You're a Natural/i)).toBeInTheDocument();
    } else {
      expect(screen.queryByText(/Congratulations! You're a Natural/i)).not.toBeInTheDocument();
    }
  });
});
