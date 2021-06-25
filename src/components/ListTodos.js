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
            <div className="d-flex align-items-center">
              <input style={{ marginRight: '5px' }}onChange={() => toggleComplete(todo.id)} type="checkbox" />
              <div style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.task}</div>
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
      <Button 
        onClick={() => setSeeComplete(!seeComplete)} 
        variant={seeComplete ? 'dark' : 'outline-dark'}
        size="sm"
        checked={seeComplete}
        style={{ marginTop: '5px', marginBottom: '5px'}}
      > 
        Show Complete
      </Button>
      <ListGroup>
        {renderedList()}
      </ListGroup>
    </>
  )
}

export default ListTodo