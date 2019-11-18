const initialState = {
    selectedLanguage: ''
}

export const languageSelectReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LANGUAGE_CHANGED':
        return {
          ...state,
          selectedLanguage: action.selectedLanguage
        };
      default:
        return state;
    }
  };