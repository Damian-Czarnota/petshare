import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { getSessionStorageSyncReducer } from '@app/_utils/ngrx';
import { InjectionToken } from '@angular/core';
import { FEATURE_NAME } from '@app/_core/store/root.constant';
import { initialState, RootState, State } from '@app/_core/store/root.state';
import { ActionType, RootAction } from '@app/_core/store/root.action';

const sessionStorageSyncReducer = (actionReducer: ActionReducer<any>): ActionReducer<any> => (
  getSessionStorageSyncReducer(FEATURE_NAME, actionReducer, state => state.root)
);

export const reducer = (state: State | undefined = initialState, action: RootAction) => {
  switch (action.type) {
    case ActionType.REFERRER_SET:
      return {
        ...state,
        referrer: state.referrer ? state.referrer : action.payload
      };
    default:
      return state;
  }
};

const reducers: ActionReducerMap<RootState> = {
  root: reducer
};

export const metaReducers: MetaReducer[] = [sessionStorageSyncReducer];

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<RootState>>('reducers.root', {
  factory: () => reducers
});
