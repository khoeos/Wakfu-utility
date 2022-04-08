import React from 'react'
import { connect } from 'react-redux'

import { TrashIcon, EyeOffIcon } from '@heroicons/react/outline'
import {
  deleteCustomTask,
  toggleVisibility,
  toggleTask,
} from '../../redux/tasks/tasks.actions'
import constants, { categories } from '../../redux/tasks/task.constants'

import classNames from '../../utility/classNames'

function TaskItem({ task, deleteTask, toggleVisibility, toggleTask }) {
  const handleClick = () => {
    toggleTask(task.id)
  }
  return (
    <div className={'relative cursor-pointer'}>
      <div
        className={classNames(
          task.completed ? 'opacity-25' : null,
          'absolute right-0 top-0 z-10 mt-1 text-gray-100'
        )}
      >
        {[
          categories.daily.custom,
          categories.weekly.custom,
          categories.monthly.custom,
        ].includes(task.category) ? (
          <button onClick={() => deleteTask(task.id)}>
            <TrashIcon
              className={classNames(' mt-[3px] mr-2 h-8 w-8 transform')}
              aria-hidden="true"
            />
          </button>
        ) : (
          <button onClick={() => toggleVisibility(task.id)}>
            <EyeOffIcon
              className={classNames('mt-[3px] mr-2 h-8 w-8 transform')}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <div
        role="button"
        tabIndex={0}
        className={classNames(
          task.type === constants.daily ? 'bg-sky-600' : null,
          task.type === constants.weekly ? 'bg-violet-600' : null,
          task.type === constants.monthly ? 'bg-emerald-600' : null,

          task.type === constants.daily && task.completed ? 'bg-sky-800' : null,
          task.type === constants.weekly && task.completed
            ? 'bg-violet-800'
            : null,
          task.type === constants.monthly && task.completed
            ? 'bg-emerald-800'
            : null,

          'relative block flex items-center  rounded-lg p-3'
        )}
        onClick={handleClick}
      >
        <input
          type="checkbox"
          className={classNames(
            task.type === constants.daily
              ? 'border-sky-300  text-sky-600 focus:ring-sky-500'
              : null,
            task.type === constants.weekly ? 'bg-violet-200' : null,
            task.type === constants.monthly ? 'bg-emerald-200' : null,
            'h-4 w-4 rounded '
          )}
          checked={task.completed}
          onClick={handleClick}
          onChange={handleClick}
        />
        <span
          className={classNames(
            task.completed ? ' text-gray-400 line-through' : ' text-gray-100',
            'ml-2'
          )}
        >
          {task.name}
        </span>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteTask: item => dispatch(deleteCustomTask(item)),
  toggleVisibility: item => dispatch(toggleVisibility(item)),
  toggleTask: item => dispatch(toggleTask(item)),
})

export default connect(null, mapDispatchToProps)(TaskItem)
