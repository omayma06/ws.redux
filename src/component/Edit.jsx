import React from 'react';
import { useState } from 'react';
import { Button , Modal , Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask} from '../JS/actions/taskActions';

const Edit = ({task}) => {
  const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [text , setText] = useState(task.text)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleEdit = () => {
      dispatch(editTask(task.id , text))
    }
  return (
    <div>
        <>
      <Button variant="succsse" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Updati Task</Form.Label>
        <Form.Control type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        
      </Form.Group >
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleEdit() ; handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Edit
