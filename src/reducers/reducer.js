import { combineReducers } from "@reduxjs/toolkit";
import movies from './eventReducer';

export default combineReducers({
    movies,
})