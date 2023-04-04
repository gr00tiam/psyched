import { combineReducers } from 'redux'
import GameReducer from './GameReducer'


// Use ES6 object literal shorthand syntax to define the object shape
const RootReducer = combineReducers({
  'gameState': GameReducer
})

export default RootReducer;