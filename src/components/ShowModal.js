import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ShowModal = ({ title, message, showModal, closeModal, }) => {
  return (
    <Modal show={showModal} onHide={closeModal} >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ShowModal