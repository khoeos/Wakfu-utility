/* eslint-disable no-unused-expressions */
import React from 'react'
import { connect } from 'react-redux'

import TaskItem from '../Components/tasks/TaskItem'
import AddTask from '../Components/tasks/AddTask'
import TaskList from '../Components/tasks/TaskList'
import TaskGroup from '../Components/tasks/TaskGroup'
import { weeklyTasks } from '../redux/tasks/tasks.selector'
import constants, { categories } from '../redux/tasks/task.constants'
import { regroupChild } from '../redux/tasks/tasks.utils'

function WeeklyPage({ weeklyTask }) {
  // const buTasks = weeklyTask.filter(
  //   task => task.category === categories.weekly.bu
  // )
  const buTasks = regroupChild(
    weeklyTask.filter(task => task.category === categories.weekly.bu),
    categories.daily.hunter
  )
  const customTasks = weeklyTask.filter(
    task => task.category === categories.weekly.custom
  )
  return (
    <div className={'min-h-screen bg-violet-900'}>
      <div className={'grid grid-cols-1 gap-8 p-4'}>
        <TaskList
          name={'Boss Ultimes'}
          cols={2}
          category={categories.weekly.bu}
        >
          {buTasks.map(item => {
            if (item.visible) {
              let maxQuests = 0
              let completed = 0
              item.subTasks.forEach(i => {
                i.visible ? maxQuests++ : null
                i.completed ? completed++ : null
              })

              return (
                <TaskGroup
                  key={item.id}
                  id={item.id}
                  name={`Boss niveau ${item.name}`}
                  cat={item.type}
                  progress={`${completed}/${maxQuests}`}
                >
                  {item.subTasks.map(quest => {
                    if (quest.visible) {
                      return <TaskItem key={quest.id} task={quest} />
                    }
                    return null
                  })}
                </TaskGroup>
              )
            }
            return null
          })}
        </TaskList>
        <TaskList
          className={'col-span-2'}
          name={'Taches personalisées'}
          cols={2}
          custom
        >
          <AddTask cat={constants.weekly} />
          <div />
          {customTasks.map(item => {
            if (item.visible) {
              return <TaskItem key={item.id} task={item} cat="day" custom />
            }
            return null
          })}
        </TaskList>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  weeklyTask: weeklyTasks(state),
})

export default connect(mapStateToProps)(WeeklyPage)
