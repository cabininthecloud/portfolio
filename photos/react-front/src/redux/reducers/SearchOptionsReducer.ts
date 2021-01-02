import { AppReducer } from '../types/AppReducer';
import { InitialState } from '../state';

const SearchOptionsReducer: AppReducer<'SearchOptions'> = (
  state = InitialState.SearchOptions,
  action
): typeof state => {
  switch (action.type) {
    case 'SearchOptions/updatePerPage':
      return {
        ...state,
        perPage: action.payload,
      };
    case 'SearchOptions/updateFilter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default SearchOptionsReducer;
