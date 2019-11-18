const initialState = {
    searchData: ''
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_CHANGED':
        return {
          ...state,
          searchData: action.searchData
        };
      default:
        return state;
    }
  };