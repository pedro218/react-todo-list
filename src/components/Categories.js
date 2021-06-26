import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import ListTodo from './ListTodos'

const Categories = ({ categories, todos, removeTask, toggleComplete }) => {
  const rendered = () => {
    return categories.map(category => {
      return (
        <Tab eventKey={category} title={category.toUpperCase()} key={category}>
          <ListTodo todos={todos} toggleComplete={toggleComplete} removeTask={removeTask} category={category} />
        </Tab>
      )
    })
  }
  if (!categories.length) {
    return <h3>There are no categories</h3>
  } 

  return (
    <Tabs defaultActiveKey={categories[0]}>
      {rendered()}
    </Tabs>
  )
}

export default Categories