import { SET_FILTER } from './todo.types'
import { VISIBILITY_FILTERS } from './todo.constants'

const initialState = VISIBILITY_FILTERS.ALL

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}

export default visibilityFilter