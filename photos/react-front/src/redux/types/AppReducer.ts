import { ActionsType } from '../actions';
import { State } from '../state';

export type AppReducer<TState extends keyof State, TAdditionalActions = ActionsType> = (
  state: State[TState] | undefined,
  action: ActionsType | TAdditionalActions
) => State[TState];
