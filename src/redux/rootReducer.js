import { combineReducers } from 'redux'

import tasks from './tasks/tasks.reducer'
import modal from './modal/modal.reducer'
import storage from './data/data.reducer'

export default combineReducers({
  tasks,
  modal,
  storage,
})
