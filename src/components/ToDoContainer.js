import {useDispatch, useSelector} from "react-redux";
import Todos from "./Todos";
import {useCallback} from "react";
import {insertToDo, toggleToDo} from "../modules/todos";

function ToDoContainer() {
    let todoArray=useSelector(state => state.todoReducer)
    let dispatch = useDispatch()
    let onCreate=text => dispatch(insertToDo(text))
    let onToggle=useCallback(id => dispatch(toggleToDo(id)),[dispatch])

    return <Todos todoArray={todoArray} onCreate={onCreate} onToggle={onToggle}/>
}

export default ToDoContainer

