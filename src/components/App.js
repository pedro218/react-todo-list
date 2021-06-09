import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button } from 'react-bootstrap'

import TaskForm from './TaskForm'
import Categories from './Categories'
import NewCategoryForm from './NewCategoryForm'

const todoList = [
  { 
    id: 0,
    task: 'Check out site',
    category: 'General',
    complete: true
  },
  {
    id: 1,
    task: 'Test the site',
    category: 'General',
    complete: false
  },
  {
    id: 3,
    task: 'Learn Node',
    category: 'Educational',
    complete: false
  }
]
const initialCategories = ['General', 'Educational']

const App = () => {
  const [todos, setTodos] = useState(todoList)
  const [categories, setCategories] = useState(initialCategories)
  const [newTask, setNewTask] = useState(false)
  const [newCategory, setNewCategory] = useState(false)

  const addTask = task => {
    console.log(task)
    const id = todos[todos.length - 1].id + 1
    setTodos([...todos, {id, ...task}])
    console.log(todos)
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id)
        todo.complete = !todo.complete
      return todo
    }))
  }

  const addCategory = category => {
    setCategories([...categories, category])
  }

  const showTorC = (makeTrue, makeFalse) => {
    makeTrue(true)
    makeFalse(false)
  }

  return (
    <Container>
      <Button 
        variant={!newTask ? 'outline-success' : 'success'} 
        onClick={() => showTorC(setNewTask, setNewCategory)}
      >
        New Task
      </Button> {' '}
      <Button
        variant={!newCategory ? 'outline-primary' : 'primary'}
        onClick={() => showTorC(setNewCategory, setNewTask)}
      >
        New Category
      </Button>

      {newTask ? 
        <TaskForm 
          addTask={addTask}
          categories={categories}
          cancelTask={() => setNewTask(false)}
        /> : ''
      }
      {newCategory ?
        <NewCategoryForm 
          cancelAdd={() => setNewCategory(!newCategory)}
          addCategory={addCategory}
        /> : ''
      }
      <hr />
      <Categories categories={categories} todos={todos} toggleComplete={toggleComplete} />
      
    </Container>
  )
}

export default App
