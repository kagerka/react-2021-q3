import { it, expect } from '@jest/globals';
import { pageAction, pageReducer } from './pageReducer';

it('should change number', () => {
  const action = pageAction('2');
  const defaultState = {
    page: '1',
  };
  const newState = pageReducer(defaultState, action);
  if (action.type === 'PAGE_NUMBER') {
    expect(newState.page).toBe('2');
  } else {
    expect(newState.page).toBe(defaultState);
  }
  expect(pageReducer(defaultState.page, '2')).toBe('1');
});
