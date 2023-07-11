import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Click me!</Button>);
    expect(baseElement).toMatchSnapshot();
  });
});
