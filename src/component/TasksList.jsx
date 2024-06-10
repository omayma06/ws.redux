import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { Button } from 'react-bootstrap';

const TasksList = () => { 
  const [status , setStatus] = useState("ALL")
    const listtasks = useSelector((state)=>state.task.listtasks)
  return (
    <div>
      <Button onClick={()=>setStatus("ALL")}>All</Button>
      <Button onClick={()=>setStatus("DONE")}>Done</Button>
      <Button onClick={()=>setStatus("UNDONE")}>unDone</Button>
     {status === "DONE" ? listtasks.fitter((el)=>el.isDone === true).map((task)=><Task key={task.id} task={task} />): <></>}
    </div>
  )
}

export default TasksList
