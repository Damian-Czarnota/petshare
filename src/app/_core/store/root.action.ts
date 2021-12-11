import { Action } from '@ngrx/store';

export enum ActionType {
  REFERRER_SET = '[Root] Referrer set'
}

export class SetReferrerAction implements Action {
  readonly type = ActionType.REFERRER_SET;
  constructor(public payload: string) {}
}

export type RootAction = SetReferrerAction;
