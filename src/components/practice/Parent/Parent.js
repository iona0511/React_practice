import ChildA from './ChildA';
import ChildB from './ChildB';
import { useState } from "react";


function Parent() {
    const [receiveFromChildB, setReceiveFromChildB] = useState("");
    return (<>

        <ChildA text="P & C test" receiveFromChildB={receiveFromChildB} />
        <ChildB text="C & C test" setReceiveFromChildB={setReceiveFromChildB} />


    </>);
}

export default Parent;