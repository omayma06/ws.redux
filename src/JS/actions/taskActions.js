import { ADD_TASK , DELETE_TASK, EDIT_TASK, DONE_TASK } from "../constant/actionsTaypes";

export const addTask = (newTask)=>{
    return{
        type:ADD_TASK,
        payload: newTask
    }
}

export const editTask = (id , newTask)=>{
    return{
        type:EDIT_TASK,
        payload: {id , newTask}
    }
}
export const delete_task = (id)=>{
    return{
        type:DELETE_TASK,
        payload: id
    }
}
export const done_task = (id)=>{
    return{
        type:DONE_TASK,
        payload: id
    }
}