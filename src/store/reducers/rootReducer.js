import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import courseReducer from '../features/coursesSlice';
import playerReducer from '../features/playerSlice';
import homeReducer from '../features/homeSlice';
import popupReducer from '../features/popupSlice';
import burgerReducer from '../features/burgerSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  player: playerReducer,
  home: homeReducer,
  popup: popupReducer,
  burger: burgerReducer
});

export default rootReducer;
