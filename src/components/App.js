import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, ListGroup, Button } from 'react-bootstrap'

import Form from './TaskForm'

const todoList = [
  { 
    id: 0,
    task: 'Check out site',
    complete: true
  },
  {
    id: 1,
    task: 'Test the site',
    complete: false
  }

]

const App = () => {
  const [todos, setTodos] = useState(todoList)

  const addTask = task => {
    console.log('Adding task')
    const id = todos[todos.length - 1].id + 1
    setTodos([...todos, {id, ...task}])
    console.log('Added task')
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id)
        todo.complete = !todo.complete
      return todo
    }))
  }

  const renderedList = () => {
    return todos.map(todo => {
      return (
        <ListGroup.Item key={todo.id}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>Task: {todo.task}</p>
            </div>
            <Button 
              variant="success" 
              className="float-right" 
              style={{ height: '40px' }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.complete ? 'undo' : 'complete'}
            </Button>
          </div>
        </ListGroup.Item>
      )
    })
  }

  return (
    <Container>
      <Form addTask={addTask}/>
      <hr />
      <ListGroup>
      {renderedList()}
      </ListGroup>
      
    </Container>
  )
}

export default App

// import 'bootstrap/dist/css/bootstrap.min.css'