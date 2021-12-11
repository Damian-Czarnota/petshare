import * as rootReducer from './root.reducer';
import { State } from '@app/_core/store/root.state';
import { RootAction, SetReferrerAction } from '@app/_core/store/root.action';

describe('Testing RootReducer', () => {
  const initialState: State = { referrer: null };

  describe('Unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = rootReducer.reducer(initialState, action as RootAction);

      expect(state).toBe(initialState);
    });
  });

  describe('Refferer set action', () => {
    it('should update state', () => {
      const newReferrerValue = 'testing-refferrer-set-action';
      const newState = {
        referrer: newReferrerValue
      };

      const state = rootReducer.reducer(initialState, new SetReferrerAction(newReferrerValue));

      expect(state).toEqual(newState);
    });
  });
});
