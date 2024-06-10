import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Admin from './admin'; // Adjust the path if necessary

test('renders hello text', () => {
  render(<Admin />);
  const textElement = screen.getByText('hello');
  expect(textElement).toBeInTheDocument();
});
