import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';

beforeEach(() =>
  render(<Login />, {
    wrapper: Router,
  })
);

describe('when the login button is mounted', () => {
  it('should show login button', () => {
    const button = screen.getByRole('button', { name: /login/i });
    expect(button).toBeInTheDocument();
  });
});
