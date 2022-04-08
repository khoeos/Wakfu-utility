/* eslint-disable no-unused-expressions */
import React from 'react'
import { connect } from 'react-redux'

import TaskItem from '../Components/tasks/TaskItem'
import AddTask from '../Components/tasks/AddTask'
import TaskList from '../Components/tasks/TaskList'
import { monthlyTasks } from '../redux/tasks/tasks.selector'
import constants, { categories } from '../redux/tasks/task.constants'

function MonthlyPage({ monthlyTask }) {
  const baseTasks = monthlyTask.filter(
    task => task.category === categories.monthly.base
  )
  const customTasks = monthlyTask.filter(
    task => task.category === categories.monthly.custom
  )

  return (
    <div className={'min-h-screen bg-emerald-900'}>
      <div className={'grid grid-cols-1 gap-8 p-4'}>
        <TaskList
          name={'Taches de base'}
          cols={2}
          category={categories.monthly.base}
        >
          {baseTasks.map(item => {
            if (item.visible) {
              return <TaskItem key={item.id} task={item} />
            }
            return null
          })}
        </TaskList>
        <TaskList name={'Taches personalisées'} cols={2} custom>
          <AddTask cat={constants.monthly} />
          <div />
          {customTasks.map(item => {
            if (item.visible) {
              return <TaskItem key={item.id} task={item} />
            }
            return null
          })}
        </TaskList>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  monthlyTask: monthlyTasks(state),
})

export default connect(mapStateToProps)(MonthlyPage)
