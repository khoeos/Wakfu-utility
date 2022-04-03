import React from 'react'
import ProgressBar from '../Components/progressBar/progressBar'
import AddTodo from '../Components/todo/AddTodo'
import TodoList from '../Components/todo/TodoList'
import VisibilityFilers from '../Components/todo/VisibilityFilers'

function Index() {
  return (
    <>
      <ProgressBar />
      <div className={'min-h-screen bg-cyan-50'}>
        {/* Test
        <button onClick={() => localStorage.clear()}>Clear</button> */}
        <div>
          <h2>Tâches de base</h2>
          <ul>
            <li> taches 1</li>
            <li>tache 2</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Index
