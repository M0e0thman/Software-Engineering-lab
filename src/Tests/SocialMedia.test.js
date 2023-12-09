import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialMedia from './SocialMedia';

describe('SocialMedia Component', () => {
  test('renders social media tabs and content', () => {
    render(<SocialMedia />);

    // Check if the SocialMedia component renders
    expect(screen.getByText(/Connect with Us on Social Media/i)).toBeInTheDocument();

    // Check if the tabs and initial content are rendered
    expect(screen.getByText(/Instagram/i)).toBeInTheDocument();
    expect(screen.getByText(/Follow us on Instagram (@2102Rocks)/i)).toBeInTheDocument();

    // Simulate user interaction to switch tabs
    fireEvent.click(screen.getByText(/Facebook/i));

    // Check if the content of the active tab is updated
    expect(screen.getByText(/Like our Facebook page (@2102Rocks)/i)).toBeInTheDocument();

    // Simulate user interaction to switch tabs
    fireEvent.click(screen.getByText(/LinkedIn/i));

    // Check if the content of the active tab is updated
    expect(screen.getByText(/Connect with us on LinkedIn (@2102Rocks)/i)).toBeInTheDocument();
  });
});
