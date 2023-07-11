import React from 'react';
import { render } from '@testing-library/react-native';
import { Button } from './Button.native';

test('renders correctly', () => {
  const root = render(<Button>Click me!</Button>);
  expect(root).toMatchSnapshot();
});
