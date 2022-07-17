import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
    const minus = (e) => { setCount(count - 1); };
    const plus = (e) => { setCount(count + 1); };

    return (<>
        <h3>calculate</h3>
        <div style={{ display: 'flex' }}>
            <button onClick={count > 0 ? minus : ""}>-</button>
            <h5>{count}</h5>
            <button onClick={plus}>+</button>
        </div>
        <hr />
    </>);
}

export default Count;