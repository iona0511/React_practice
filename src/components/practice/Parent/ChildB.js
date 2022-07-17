import { useState } from "react";
function ChildB({ text, setReceiveFromChildB }) {
    const [dataB, setDataB] = useState('dataBtoChildA');
    return (<>
        <h1>{text}</h1>
        <h2 >{setReceiveFromChildB(dataB)}</h2>
    </>);
}


export default ChildB;