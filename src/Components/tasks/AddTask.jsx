import React, { useState } from 'react'
import { connect } from 'react-redux'

import { PlusCircleIcon } from '@heroicons/react/outline'
import classNames from '../../utility/classNames'
import { addCustomTask } from '../../redux/tasks/tasks.actions'
import constants from '../../redux/tasks/task.constants'

function AddTask({ cat, addTask }) {
  const [value, setValue] = useState('')
  const onChange = event => {
    setValue(event.target.value)
  }

  const handleAdd = () => {
    if (value !== '') {
      addTask({ name: value }, cat)
      setValue('')
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div
      className={classNames(
        cat === constants.daily ? 'bg-sky-600' : null,
        cat === constants.weekly ? 'bg-violet-600' : null,
        cat === constants.monthly ? 'bg-emerald-600' : null,

        'block flex items-center rounded-lg p-2'
      )}
    >
      <input
        className={classNames(
          cat === constants.daily
            ? 'bg-sky-600 placeholder:text-sky-800'
            : null,
          cat === constants.weekly
            ? 'bg-violet-600 placeholder:text-violet-800'
            : null,
          cat === constants.monthly
            ? 'bg-emerald-600 placeholder:text-emerald-800'
            : null,

          'block flex w-full items-center rounded-lg border-0 p-1 text-gray-100'
        )}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={'Ajouter une tache personalisée'}
      />
      <button className={''} onClick={handleAdd}>
        <PlusCircleIcon
          className={classNames('ml-8 h-8 w-8 transform text-gray-100')}
          aria-hidden="true"
        />
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addTask: (item, type) => dispatch(addCustomTask(item, type)),
})

export default connect(null, mapDispatchToProps)(AddTask)
