import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const TaskForm = ({ addTask, cancelTask, categories }) => {
  const [task, setTask] = useState('')
  const [category, setCategory] = useState(categories[0])

  const onSubmit = (e) => {
    e.preventDefault()
    addTask({ task, category, complete: false})
    setTask('')
  }

  const renderOptions = () => {
    return categories.map(category => {
      return (
        <option key={category} value={category}>{category}</option>
      )
    })
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Task</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="What is you task?"
            value={task}
            onChange={e => setTask(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select Category</Form.Label>
          <Form.Control as="select" onChange={e => setCategory(e.target.value)}>
            {renderOptions()}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Button variant="danger" onClick={cancelTask}>Close</Button> {' '}
          <Button variant="warning" onClick={() => setTask('')}>Reset</Button>{' '}
          <Button variant="secondary" type="submit">Add Task</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default TaskForm