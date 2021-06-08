import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'

const ListTodo = ( { todos, toggleComplete, category }) => {

  const renderedList = () => {
    return todos.map(todo => {
      if (todo.category !== category)
        return null
      return (
        <ListGroup.Item key={todo.id} style={{ color: todo.complete ? 'rgba(0,0,0,.5)' : 'black'}}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.task}</p>
            </div>
            <Button 
              variant="dark" 
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
    <ListGroup>
      {renderedList()}
    </ListGroup>
  )
}

export default ListTodo