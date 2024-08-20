import {combineReducers} from "redux";
import counterReducer from "./counter";
import todoReducer from "./todos";

// 여러개의 리듀서를 합쳤을 경우
// 우리는 그 합본을 rootReducer라고 부르는게 전통
let rootReducer = combineReducers({
    counterReducer,
    todoReducer
})

export default rootReducer