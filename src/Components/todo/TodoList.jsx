import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from '../../redux/todo/todo.selector'
import { VISIBILITY_FILTERS } from '../../redux/todo/todo.constants'

function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => (
            <Todo key={`todo-${todo.id}`} todo={todo} />
          ))
        : 'No todos'}
    </ul>
  )
}

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  return { todos }
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
}
export default connect(mapStateToProps)(TodoList)
