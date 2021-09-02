import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from '@testing-library/react';
import { it, expect, beforeEach, afterEach } from '@jest/globals';
import NotFound from './NotFound';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should have src', () => {
  act(() => {
    render(<NotFound />, container);
  });

  expect(container.querySelector("[data-testid='404']").getAttribute('src')).toEqual('/icons/404.svg');
});
