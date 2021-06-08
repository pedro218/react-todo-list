import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const NewCategoryForm = ({ addCategory, cancelAdd }) => {
  const [category, setCategory] = useState('')

  const onSubmit = event => {
    event.preventDefault()
    addCategory(category)
    setCategory('')
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Row className="align-items-center">
        <Form.Label>Category Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Music"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
        <Button variant="warning" onClick={cancelAdd}>Cancel</Button>{' '}
        <Button variant="info" type="submit">Add</Button>
      </Form.Row>
    </Form>
  )
}

export default NewCategoryForm