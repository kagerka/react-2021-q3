import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from '@testing-library/react';
import { it, expect, beforeEach, afterEach } from '@jest/globals';
import About from './About';

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
    render(<About />, container);
  });

  expect(container.querySelector("[data-testid='about']").getAttribute('src')).toEqual('/images/about.svg');
});
