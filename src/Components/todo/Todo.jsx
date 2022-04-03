import React from 'react'
import { connect } from 'react-redux'
import cx from '../../utility/classNames'
import { toggleTodo } from '../../redux/todo/todo.actions'

function Todo({ todo, toggleTodo }) {
  console.log(todo)
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? '👌' : '👋'}{' '}
      <span
        className={cx(
          'todo-item__text',
          todo && todo.completed && 'todo-item__text--completed'
        )}
      >
        {todo.content}
      </span>
    </li>
  )
}

// export default Todo;
export default connect(null, { toggleTodo })(Todo)
