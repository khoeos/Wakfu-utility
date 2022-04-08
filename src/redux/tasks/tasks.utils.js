import constants, { categories } from './task.constants'

export function isDateToday(date) {
  const todayObj = new Date()
  return todayObj.getDate() === date.getDate()
}
export function isThisWeek(date) {
  const todayObj = new Date()
  const todayDate = todayObj.getDate()
  const todayDay = todayObj.getDay()

  // get first date of week
  const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay))

  // get last date of week
  const lastDayOfWeek = new Date(firstDayOfWeek)
  lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6)

  // if date is equal or within the first and last dates of the week
  return date >= firstDayOfWeek && date <= lastDayOfWeek
}
export function isThisMonth(date) {
  const todayObj = new Date()
  return todayObj.getMonth() === date.getMonth()
}

export function checkToUpdate(tasks) {
  return [...tasks].map(item => {
    switch (item.type) {
      case constants.daily:
        return item.lastUpdated && isDateToday(new Date(item.lastUpdated))
          ? item
          : { ...item, completed: false }
      case constants.weekly:
        return item.lastUpdated && isThisWeek(new Date(item.lastUpdated))
          ? item
          : { ...item, completed: false }
      case constants.monthly:
        return item.lastUpdated && isThisMonth(new Date(item.lastUpdated))
          ? item
          : { ...item, completed: false }

      default:
        break
    }
  })
}

export function regroupChild(list) {
  function partition(array, filter) {
    const pass = []
    const fail = []
    array.forEach((e, idx, arr) => (filter(e, idx, arr) ? pass : fail).push(e))
    return [pass, fail]
  }
  let [child, parent] = partition(list, e => e.child === true)

  const groupBy = (array, key) =>
    array.reduce((result, currentValue) => {
      ;(result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      )

      return result
    }, {})

  child = groupBy(child, 'parent')

  parent.forEach(e => {
    e.subTasks = child[e.id]
  })
  return parent
}
