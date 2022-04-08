import React from 'react'
import { connect } from 'react-redux'
import { toggleVisibility } from '../../redux/tasks/tasks.actions'

function ModalTaskItem({ task, toggleVisibility }) {
  return (
    <div className={'flex items-center gap-1'}>
      <input
        type="checkbox"
        className={'h-4 w-4 rounded'}
        checked={task.visible}
        onChange={() => toggleVisibility(task.id)}
      />
      <label>{task.name}</label>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleVisibility: item => dispatch(toggleVisibility(item)),
})

export default connect(null, mapDispatchToProps)(ModalTaskItem)
