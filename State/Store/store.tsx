import { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import Reducer from './Reducer';

const rootReducer = combineReducers({
  questionCount: Reducer,
});

console.log(Reducer);

export const store = createStore(rootReducer);
