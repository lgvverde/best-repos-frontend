import { languageSelectReducer } from './languageSelectorReducer';
import { menuReducer } from './menuReducer';
import { searchReducer } from './searchReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    languageSelectState: languageSelectReducer,
    menuState: menuReducer,
    searchState: searchReducer
});