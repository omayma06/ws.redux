import React, { useState } from 'react';
import { Button , Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/actions/taskActions';

const AddTask = () => {
    const dispatch = useDispatch();
    const [text , setText] = useState("");

    const handleAddTask = (e) =>{
        e.preventDefault();
        if(!text){
            alert("You Can't Add An Empty Task!!")
        }else{
            dispatch(addTask({id:Math.random() , text:text , isDone :false}))
        }
    }
  return (
    <div>
          <Form onSubmit={handleAddTask}>
      <Form.Group className="mb-3">
        <Form.Label>Add New Task </Form.Label>
        <Form.Control type="text" placeholder="Enter Task..." name='text' value={text} onChange={(e)=>setText(e.target.value)} />
      </Form.Group>
      <button>Add</button>
      </Form>
    </div>
  )
}

export default AddTask
