import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
    const minus = (e) => { setCount(count - 1); };
    const plus = (e) => { setCount(count + 1); };

    return (<><div style={{ display: 'flex' }}>
        <button onClick={count > 0 ? minus : ""}>-</button>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
    </div>
    </>);
}

export default Count;