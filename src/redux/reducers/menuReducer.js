const initialState = {
    current_menu_key: 'SEARCH_PAGE'
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MENU_CHANGED':
        return {
          ...state,
          current_menu_key: action.current_menu_key
        };
      default:
        return state;
    }
  };