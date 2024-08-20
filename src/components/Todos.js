import React, {useState} from "react";

let ToDoItem = React.memo(
    function ToDoItem({todo, onToggle}) {

        return (
            <li
                style={{ textDecoration: todo.completed ? 'line-through': 'none'}}
                onClick={() => onToggle(todo.id)}
            >
                {todo.text}
            </li>

        )
    }
)

let ToDoList = React.memo(
    function ToDoList({todoArray, onToggle}) {
        return (
            <ul>
                {todoArray.map(t => (
                    <ToDoItem key={t.id} todo={t} onToggle={onToggle}/>
                ))}
            </ul>
        )
    }
)

function Todos({todoArray,onCreate, onToggle}) {
   let [text,setText]=useState('')
   let onChange = e => setText(e.target.value)
   let onSubmit = e => {
       e.preventDefault()
       onCreate(text)
       setText('')
   }
   return (
       <div>
            <form onSubmit={onSubmit}>
                <input value={text} placeholder='할일을 입력해주세요.' onChange={onChange}/>
                <button type='submit'>입력하기</button>
            </form>
           <hr/>
           <ToDoList todoArray={todoArray} onToggle={onToggle}/>
       </div>
   )
}

export default Todos
