import React, { useState } from 'react'
import { ListGroup, Button } from 'react-bootstrap'

const ListTodo = ( { todos, toggleComplete, category }) => {
  const [seeComplete, setSeeComplete] = useState(true)

  const renderedList = () => {
    return todos.map(todo => {
      if (todo.category !== category)
        return null
      if (!seeComplete && todo.complete) 
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
              size="sm"
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
    <>
      <input onChange={() => setSeeComplete(!seeComplete)} type="checkbox" checked={seeComplete} /> Show Complete
      <ListGroup>
        {renderedList()}
      </ListGroup>
    </>
  )
}

export default ListTodo