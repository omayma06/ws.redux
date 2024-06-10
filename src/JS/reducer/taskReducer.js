import { ADD_TASK , DELETE_TASK, EDIT_TASK ,DONE_TASK } from "../constant/actionsTaypes";

const initialState = {
    listtasks: [
        {
            id:0, 
            text:"Learn React",
            isDone: true
        },
        {
            id:1, 
            text:"Learn Redux",
            isDone: false
        }
        
    ]
}
export const taskReducer = (state=initialState , {type , payload})=>{
    switch (type) {
        case ADD_TASK:
            return {...state , listtasks : [...state.listtasks , payload] }
            case EDIT_TASK:
                return {...state , listtasks:state.listtasks.map(el=>el.id === payload.id ? {...el , text : payload.newTask} : el)}
                case DELETE_TASK:
                    return {...state , listtasks : state.listtasks.filter((el)=>el.id !== payload)}
                    case DONE_TASK:
                        return {...state , listtasks:state.listtasks.map((el)=>el.id === payload ? {...el , isDone: !el.isDone} : el)}

        default:
            return state;
    }
}