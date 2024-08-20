import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import rootReducer from "./modules/reducers";
import {Provider} from "react-redux";

// rootReducer 리듀서계의  스캐너 유틸, 어레이 유틸 같은 건가??
let store =createStore(rootReducer)
console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
