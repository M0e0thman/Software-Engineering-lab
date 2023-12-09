import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertions
import Quiz from './Quiz';

jest.mock('./my_state', () => ({
  my_score: 0,
  my_count: 0,
}));

const mockIncrementScore = jest.fn();
const mockIncrementCount = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  Component: jest.fn((props) => (props.children ? props.children : null)),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Quiz Component', () => {
  test('renders quiz questions and handles user input', () => {
    render(<Quiz />);

    // Check if quiz questions are rendered
    expect(screen.getByText(/We love Weekly Quizes/i)).toBeInTheDocument();
    expect(screen.getByText(/What is the capital of Japan?/i)).toBeInTheDocument();
    expect(screen.getByText(/Who wrote 'Romeo and Juliet'?/i)).toBeInTheDocument();
    expect(screen.getByText(/What is the largest mammal on Earth?/i)).toBeInTheDocument();

    // Simulate user interaction
    fireEvent.click(screen.getByText(/Tokyo/i));
    fireEvent.click(screen.getByText(/William Shakespeare/i));
    fireEvent.click(screen.getByText(/Blue Whale/i));

    // Check if alert messages are displayed
    expect(window.alert).toHaveBeenCalledWith("Correct! You're doing great!");
    expect(window.alert).toHaveBeenCalledWith("Correct! You're doing great!");
    expect(window.alert).toHaveBeenCalledWith("Correct! You're doing great!");

    // Check if the finish quiz button is rendered
    expect(screen.getByText(/Finish Quiz/i)).toBeInTheDocument();

    // Simulate finish quiz button click
    fireEvent.click(screen.getByText(/Finish Quiz/i));

    // Check if the alert message with the total score is displayed
    expect(window.alert).toHaveBeenCalledWith('Total score: 3/3');
  });
});
