import { ActionReducer } from '@ngrx/store';

export const getSessionStorageSyncReducer = (storageKey: string,
                                             actionReducer: ActionReducer<any>,
                                             stateMapper: (state) => any): ActionReducer<any> => (
  (state, action) => {
    const nextState = actionReducer(state, action);

    sessionStorage.setItem(storageKey, JSON.stringify((stateMapper(nextState))));

    return actionReducer(state, action);
  }
);
