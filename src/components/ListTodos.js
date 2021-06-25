import React, { useState } from 'react'
import { ListGroup, Button, Dropdown } from 'react-bootstrap'

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
              <div style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>{todo.task}</div>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                ...
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => console.log('delete')}>Delete</Dropdown.Item>
                <Dropdown.Item onClick={() => console.log('Move')}>Move</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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