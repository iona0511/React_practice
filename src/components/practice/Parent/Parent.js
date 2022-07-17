import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC';
import { useState } from "react";


function Parent() {
    const [receiveFromChildB, setReceiveFromChildB] = useState("");
    return (<>

        <ChildA text="P & C test" receiveFromChildB={receiveFromChildB} />
        <ChildB text="C & C test" setReceiveFromChildB={setReceiveFromChildB} />
        <ChildC />


    </>);
}

export default Parent;