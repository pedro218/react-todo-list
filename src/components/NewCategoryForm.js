import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const NewCategoryForm = ({ addCategory, cancelAdd }) => {
  const [category, setCategory] = useState('')

  const onSubmit = event => {
    event.preventDefault()
    addCategory(category.toUpperCase())
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
        <Button variant="secondary" onClick={cancelAdd}>Done</Button>{' '}
        <Button variant="info" type="submit">Add</Button>
      </Form.Row>
    </Form>
  )
}

export default NewCategoryForm