import { it, expect } from '@jest/globals';
import { imageDetailsAction, imageDetailsReducer } from './imageDetailsReducer';

it('should be undefined', () => {
  const action = imageDetailsAction({});
  const defaultState = {
    imageDetails: undefined,
  };
  const newState = imageDetailsReducer(defaultState, action);
  if (action.type === 'IMAGE_DETAILS') {
    expect(newState.imageDetails).toStrictEqual({});
  } else {
    expect(newState.imageDetails).toBe(defaultState);
  }
  expect(imageDetailsReducer(defaultState.imageDetails, {})).toStrictEqual({ imageDetails: undefined });
});
