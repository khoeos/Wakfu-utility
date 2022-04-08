/* eslint-disable no-nested-ternary */
import TaskActionTypes from './tasks.type'
import constants, { categories } from './task.constants'

export const addCustomTask = (task, taskType) => {
  console.log('d')
  const category =
    taskType === constants.daily
      ? categories.daily.custom
      : taskType === constants.weekly
      ? categories.weekly.custom
      : taskType === constants.monthly
      ? categories.monthly.custom
      : 'ERROR'
  return {
    type: TaskActionTypes.addCustomTask,
    payload: {
      type: taskType,
      category,
      id: `${category}-${Date.now()}`,
      ...task,
      visible: true,
      completed: false,
      lastUpdated: null,
    },
  }
}

export const deleteCustomTask = id => ({
  type: TaskActionTypes.deleteCustomTask,
  payload: id,
})

export const toggleVisibility = id => ({
  type: TaskActionTypes.toggleVisibility,
  payload: id,
})

export const toggleTask = task => ({
  type: TaskActionTypes.toggleTask,
  payload: { id: task, updated: Date.now() },
})

export const checkUpdate = taskType => ({
  type: TaskActionTypes.checkUpdate,
  taskType,
})
