import { provide } from '@bab/test-aid';

import { AppLoadedAction } from '../app.actions';
import { appReducer } from '../app.reducer';
import { initialAppState } from '../app.state';

describe('AppReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = provide({ type: 'NOOP' });
      const state = appReducer(undefined, action);

      expect(state).toBe(initialAppState);
    });
  });

  describe('[App] loaded', () => {
    it('should change the loading status to false', () => {
      const action = new AppLoadedAction();
      const state = appReducer(initialAppState, action);

      expect(state).toEqual({
        ...initialAppState,
        loading: false
      });
    });
  });
});
