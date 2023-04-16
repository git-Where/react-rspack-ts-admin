// import { WebSocketStore } from './ws';

import { combineReducers, createStore } from 'redux'
 
import book from './appStore'

const rootReducer = combineReducers({
  book
})


export default createStore(rootReducer);
