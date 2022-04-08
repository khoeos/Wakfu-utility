/* eslint-disable no-prototype-builtins */
import constants from './task.constants'
import task from './tasks.data'

export const dailyTasks = (store, showCategory = true, completed = false) => {
  console.log()
  let tasks = store.tasks.filter(task => task.type === constants.daily)

  if (completed) {
    tasks = tasks.filter(task => task.completed === true)
  }

  if (!showCategory) {
    tasks = tasks.filter(task => task.hasOwnProperty('completed'))
  }
  return tasks
}

export const weeklyTasks = (store, showCategory = true, completed = false) => {
  console.log()
  let tasks = store.tasks.filter(task => task.type === constants.weekly)

  if (completed) {
    tasks = tasks.filter(task => task.completed === true)
  }

  if (!showCategory) {
    tasks = tasks.filter(task => task.hasOwnProperty('completed'))
  }

  return tasks
}

export const monthlyTasks = (store, showCategory = true, completed = false) => {
  console.log()
  const tasks = store.tasks.filter(task => task.type === constants.monthly)
  if (completed) {
    return tasks.filter(task => task.completed === true)
  }
  return tasks
}

export const getTasksNbr = store => ({
  daily: [
    dailyTasks(store, false, true).filter(task => task.visible === true).length,
    dailyTasks(store, false).filter(task => task.visible === true).length,
  ],
  weekly: [
    weeklyTasks(store, false, true).filter(task => task.visible === true)
      .length,
    weeklyTasks(store, false).filter(task => task.visible === true).length,
  ],
  monthly: [
    monthlyTasks(store, false, true).filter(task => task.visible === true)
      .length,
    monthlyTasks(store, false).filter(task => task.visible === true).length,
  ],
})

export const getChilds = (tasks, parent) =>
  tasks.filter(task => task.parent === parent)

export const getChildsIds = tasks => {
  const ids = []
  tasks.forEach(e => ids.push(e.id))
  return ids
}
