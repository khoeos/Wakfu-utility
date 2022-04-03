import { combineReducers } from 'redux'

import visibilityFilter from './todo/todoVisibility.reducer'
import todos from './todo/todo.reducer'

export default combineReducers({
  todos,
  visibilityFilter,
})
