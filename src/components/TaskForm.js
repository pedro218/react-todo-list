import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submited task')
    addTask({ task })
    setTask('')
  }
  return  (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Form.Label>Task</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="What is you task?"
            value={task}
            onChange={e => setTask(e.target.value)}
            required
          />
        </Form.Row>
        <Form.Row>
          <Button variant="warning" onClick={() => setTask('')}>Reset</Button>{' '}
          <Button variant="secondary" type="submit">Add Task</Button>
        </Form.Row>
      </Form>
    </div>
  )
}

export default TaskForm