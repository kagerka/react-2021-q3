import { it, expect } from '@jest/globals';
import { beforeSearchAction, beforeSearchReducer } from './beforeSearchReducer';

it('should be false', () => {
  const action = beforeSearchAction(false);
  const defaultState = {
    beforeSearch: true,
  };
  const newState = beforeSearchReducer(defaultState, action);
  expect(newState.beforeSearch).toBe(false);

  if (action.type === 'BEFORE_SEARCH') {
    expect(newState.beforeSearch).toStrictEqual(false);
  } else {
    expect(newState.beforeSearch).toBe(defaultState);
  }
  expect(beforeSearchReducer(defaultState.beforeSearch, {})).toStrictEqual(true);
});
