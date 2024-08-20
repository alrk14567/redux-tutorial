//액션 타입 정의
let INSERT_TODO='todos/INSERT_TODO'
let TOGGLE_TODO='todos/TOGGLE_TODO'


//생성 함수 만들기
let nextId=1
export let insertToDo= text =>({
    type: INSERT_TODO,
    todo: {
        id: nextId++,
        text
    }
})
export let toggleToDo=id =>({
    type: TOGGLE_TODO,
    id
})

//초기 상태 만들기
let initialState=[];


// 리듀서 만들어주기
export default function todoReducer(state =initialState,action) {
    switch (action.type) {
        case INSERT_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map(
                t => t.id === action.id ? {...t,completed: !t.completed} : t
            )
        default:
            return state;
    }
}