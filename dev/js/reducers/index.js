import {combineReducers} from 'redux';
import ToolbarReducer from './reducer-toolbar';
import DeckReducer from './reducer-deck';

const allReducers = combineReducers({
    toolbar: ToolbarReducer,
    deck: DeckReducer,
});

export default allReducers;
