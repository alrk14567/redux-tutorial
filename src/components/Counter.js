import React from "react";

function Counter({number, diff, onPlus, onMinus, onSetDiff}) {
    let onChange = e => {
        let value = e.target.value
        onSetDiff(parseInt(value))
    }
    return (
        <div>
            <h1>
                현재 값: {number}
            </h1>
            <hr/>
            <button onClick={onMinus}>-</button>
            <input value={diff} min='1' onChange={onChange}/>
            <button onClick={onPlus}>+</button>
        </div>
    )
}

export default Counter