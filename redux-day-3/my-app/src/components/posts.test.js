import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Posts from './posts';

describe('<Login />', () => {
  test('it should mount', () => {
    render(<Posts />);
    const login = screen.getByTestId('Posts');
    expect(login).toBeInTheDocument();
  });
});