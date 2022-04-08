/* eslint-disable no-unused-expressions */
import React from 'react'
import { connect } from 'react-redux'

import TaskItem from '../Components/tasks/TaskItem'
import AddTask from '../Components/tasks/AddTask'
import TaskList from '../Components/tasks/TaskList'
import TaskGroup from '../Components/tasks/TaskGroup'
import { dailyTasks } from '../redux/tasks/tasks.selector'
import constants, { categories } from '../redux/tasks/task.constants'
import { regroupChild } from '../redux/tasks/tasks.utils'

function DailyPage({ dailyTask }) {
  const baseTasks = dailyTask.filter(
    task => task.category === categories.daily.base
  )
  const hunterTasks = regroupChild(
    dailyTask.filter(task => task.category === categories.daily.hunter),
    categories.daily.hunter
  )
  const customTasks = dailyTask.filter(
    task => task.category === categories.daily.custom
  )

  return (
    <div className={'min-h-screen bg-sky-900'}>
      <div className={'flex flex flex-col gap-8 p-4 md:grid md:grid-cols-2 '}>
        <TaskList
          name={'Taches de base'}
          cols={1}
          category={categories.daily.base}
        >
          {baseTasks.map(item => {
            if (item.visible) {
              return <TaskItem key={item.id} task={item} />
            }
            return null
          })}
        </TaskList>
        <TaskList name={'Chasseur'} category={categories.daily.hunter} cols={1}>
          {hunterTasks.map(item => {
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
                  name={`Quêtes niveau ${item.name}`}
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
          <AddTask cat={constants.daily} />
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
  dailyTask: dailyTasks(state),
})

export default connect(mapStateToProps)(DailyPage)
