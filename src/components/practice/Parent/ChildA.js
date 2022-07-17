function ChildA({ text, receiveFromChildB }) {
    return (<>
        <h1>{text}</h1>
        <h1>{receiveFromChildB}</h1>
    </>);
}
export default ChildA;