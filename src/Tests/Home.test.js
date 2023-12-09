import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertions
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  test('renders welcome message and navigation links', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    // Check if the welcome message is rendered
    expect(screen.getByText(/Welcome to the Exciting World of Quizzes!/i)).toBeInTheDocument();

    // Check if navigation links are rendered
    expect(screen.getByRole('link', { name: /Quiz/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Score/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /RateOurQuiz/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /SocialMedia/i })).toBeInTheDocument();
  });
});
