import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RateOurQuiz from './RateOurQuiz';

describe('RateOurQuiz Component', () => {
  test('handles user rating and displays appropriate feedback', () => {
    render(<RateOurQuiz />);

    // Check if the RateOurQuiz component renders
    expect(screen.getByText(/Rate Our Quiz!/i)).toBeInTheDocument();

    // Simulate user interaction
    fireEvent.click(screen.getByText(/1/));
    fireEvent.click(screen.getByText(/2/));
    fireEvent.click(screen.getByText(/3/));
    fireEvent.click(screen.getByText(/4/));
    fireEvent.click(screen.getByText(/5/));

    // Check if the appropriate alert messages are displayed
    expect(window.alert).toHaveBeenCalledWith(`We appreciate your feedback. We will work harder to improve.`);
    expect(window.alert).toHaveBeenCalledWith(`We appreciate your feedback. We will work harder to improve.`);
    expect(window.alert).toHaveBeenCalledWith(`You rated the quiz 3/5. Thank you for your feedback!`);
    expect(window.alert).toHaveBeenCalledWith(`Thank you for your feedback! We worked hard on this quiz.`);
    expect(window.alert).toHaveBeenCalledWith(`Thank you for your feedback! We worked hard on this quiz.`);
  });
});
