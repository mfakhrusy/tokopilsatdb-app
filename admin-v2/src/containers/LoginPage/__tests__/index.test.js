import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from 'containers/LoginPage';
import renderer from 'react-test-renderer';

it('Renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
})