import { FEATURE_NAME } from '@app/_core/store/root.constant';

const emptyState: State = {
  referrer: null
};

const savedRoot = JSON.parse(sessionStorage.getItem(FEATURE_NAME));

export const initialState: State = {
  referrer: savedRoot?.referrer || emptyState.referrer
};

export interface State {
  referrer: string | null;
}

export interface RootState {
  root: State;
}
