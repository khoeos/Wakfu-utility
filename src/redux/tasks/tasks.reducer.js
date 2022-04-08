import TaskActionTypes from './tasks.type'
import task from './tasks.data'
import { getChilds, getChildsIds } from './tasks.selector'
import { checkToUpdate } from './tasks.utils'

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

    case '@test':
      return [
        ...state.map(item =>
          item.id === 'DAILY_BASE-1'
            ? { ...item, lastUpdated: 1649350811000 }
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
    case TaskActionTypes.checkUpdate:
      return checkToUpdate(state)
    default:
      return state
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
