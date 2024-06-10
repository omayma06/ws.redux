import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Edit from './Edit';
import { useDispatch } from 'react-redux';
import { delete_task ,  done_task} from '../JS/actions/taskActions';


const Task = ({task}) => {
  const dispatch = useDispatch();
  const handleDelete = ()=>{
    dispatch(delete_task(task.id))
  }
    // console.log(task)
    const handleDone = ()=>{
      dispatch(done_task(task.id))
    }
  return (
    <div>
        <Card body><span> {task.text} </span> <Edit task={task} /><Button onClick={handleDone} variant='warning'> {task.isDone  ? "unDone" : "Done"}</Button>   <Button onClick={handleDelete} variant='danger'>Delete</Button></Card>
      
    </div>
  )
}

export default Task
