import { UiActions, UiActionTypes } from './ui.actions';
import { initialUiState, UiStateModel } from './ui.state';

export function uiReducer(state: UiStateModel = initialUiState, action: UiActions): UiStateModel {
  switch (action.type) {
    case UiActionTypes.LOADED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
