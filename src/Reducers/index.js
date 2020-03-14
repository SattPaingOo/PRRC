import ChangeLanguageReducer from './ChangeLanguage';
import {combineReducers} from 'redux';

const allreducers = combineReducers({
    language : ChangeLanguageReducer
})

export default allreducers;