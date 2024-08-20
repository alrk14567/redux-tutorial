import {createStore} from "redux";


let initialState = {
    counter: 0
}

// ACTION 정의
let PLUS = "PLUS"
let MINUS = "MINUS"

// ACTION 생성자 정의
function plus() {
    return {
        type: PLUS
    }
}

function minus() {
    return {
        type: MINUS
    }
}

// 리듀서 만들기
function reducer(state = initialState, action) {
    switch (action.type) {
        case PLUS:
            return {
                ...state,
                counter: state.counter + 1
            }
        case MINUS:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

// 스토어 만들기
// 스토어란? 현재 우리의 리액트 앱에서의 상태값과 리듀서를 가지고 있고 추가적으로 내장 함수 몇개가 더 들어가 있는 리덕스 객체이다.
// 단, 스토어는 하나의 어플리케이션에 하나의 스토어만 있는 것이 권장된다!!! 되는데 하지 마세요!!!
let store = createStore(reducer)

// 현재 스토어에 저장된 상태값들 보기
console.log(store.getState())

// 스토어 안의 상태값이 변경되는 것을 감지해주는 listener 함수 만들기
let listener = () => {
    let state =store.getState()
    console.log(state)
}

// 위에서 만든 리스너 함수를 스토어에 등록하기
// 만약 등록한것을 빼고 싶다면? unsubscrive
let subscribe=store.subscribe(listener)

// 디스패치: 현재 우리 스토어로 메시지를 날린다.
store.dispatch(plus())
console.log(store.getState())
store.dispatch(minus())


