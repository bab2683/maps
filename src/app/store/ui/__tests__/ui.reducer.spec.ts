import { provide } from '@bab/test-aid';

import { UiLoadedAction } from '../ui.actions';
import { uiReducer } from '../ui.reducer';
import { initialUiState } from '../ui.state';

describe('AppReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = provide({ type: 'NOOP' });
      const state = uiReducer(undefined, action);

      expect(state).toBe(initialUiState);
    });
  });

  describe('[App] loaded', () => {
    it('should change the loading status to false', () => {
      const action = new UiLoadedAction();
      const state = uiReducer(initialUiState, action);

      expect(state).toEqual({
        ...initialUiState,
        loading: false
      });
    });
  });
});
