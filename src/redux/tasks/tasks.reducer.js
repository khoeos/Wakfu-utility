// import { daily, weekly, monthly } from '../../data/tasks'
import TaskActionTypes from './tasks.type'
import task from './tasks.data'
import { getChilds, getChildsIds } from './tasks.selector'
import {
  checkToUpdate,
  isDateToday,
  isThisMonth,
  isThisWeek,
} from './tasks.utils'

// const initialState = {
//   daily: { ...daily, custom: [] },
//   weekly: { ...weekly, custom: [] },
//   monthly: { ...monthly, custom: [] },
// }

function partition(array, filter) {
  const pass = []
  const fail = []
  array.forEach((e, idx, arr) => (filter(e, idx, arr) ? pass : fail).push(e))
  return [pass, fail]
}

const TaskReducer = (state = task, action) => {
  switch (action.type) {
    case TaskActionTypes.addCustomTask:
      return [...state, action.payload]
    case TaskActionTypes.deleteCustomTask:
      return [...state.filter(item => item.id !== action.payload)]

    case TaskActionTypes.toggleVisibility:
      const x = getChildsIds(getChilds([...state], action.payload))
      if (x.length > 0) {
        x.push(action.payload)
        return [
          ...state.map(item =>
            x.includes(item.id) ? { ...item, visible: !item.visible } : item
          ),
        ]
      }
      return [
        ...state.map(item =>
          item.id === action.payload
            ? { ...item, visible: !item.visible }
            : item
        ),
      ]

    case TaskActionTypes.toggleTask:
      return [
        ...state.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                completed: !item.completed,
                lastUpdated: action.payload.updated,
              }
            : item
        ),
      ]
    default:
      return checkToUpdate(state)
  }
}

export default TaskReducer

// export const DailyTaskReducer = (state = { ...daily, custom: [] }, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

// export const WeeklyTaskReducer = (state = { ...daily, custom: [] }, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

// export const MontlyTaskReducer = (state = { ...daily, custom: [] }, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }
