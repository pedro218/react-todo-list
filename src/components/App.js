import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Button } from 'react-bootstrap'

import TaskForm from './TaskForm'
import Categories from './Categories'
import NewCategoryForm from './NewCategoryForm'
import ShowModal from './ShowModal'

const todoList = [
  { 
    id: 0,
    task: 'Check out site',
    category: 'GENERAL',
    complete: true
  },
  {
    id: 1,
    task: 'Test the site',
    category: 'GENERAL',
    complete: false
  },
  {
    id: 3,
    task: 'Learn Node',
    category: 'EDUCATIONAL',
    complete: false
  }
]
const initialCategories = ['GENERAL', 'EDUCATIONAL']

const App = () => {
  const [todos, setTodos] = useState(todoList)
  const [categories, setCategories] = useState(initialCategories)
  const [newTask, setNewTask] = useState(false)
  const [newCategory, setNewCategory] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const addTask = task => {
    const id = todos[todos.length - 1].id + 1
    setTodos([...todos, {id, ...task}])
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id)
        todo.complete = !todo.complete
      return todo
    }))
  }

  const addCategory = category => {
    if (categories.includes(category))
      setShowModal(true)
    else 
      setCategories([...categories, category])
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const showTorC = (makeTrue, makeFalse) => {
    makeTrue(true)
    makeFalse(false)
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <div class="container-fluid">
          <Navbar.Brand>Todo List Application</Navbar.Brand>
        </div>
      </Navbar>
      <br />
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
        <ShowModal 
          title="Error Creating Category"
          message="Category with same name has already been created."
          showModal={showModal} 
          closeModal={closeModal} 
        />
        <hr />
        <Categories categories={categories} todos={todos} toggleComplete={toggleComplete} /> 
      </Container>
    </div>
  )
}

export default App
