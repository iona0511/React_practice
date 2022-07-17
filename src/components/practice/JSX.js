function JSX() {
    return (<>
        <h2>JSX中各種類型值呈現</h2>
        <h3>Number</h3>
        {123 - 1}
        {NaN}
        <h3>String</h3>
        {'abc'}
        {`hello ${100 - 5}`}
        <h3>Boolean(不呈現)</h3>
        {true}
        {false}
        <h3>null(不呈現)</h3>
        {null}
        <h3>undefined(不呈現)</h3>
        {undefined}
        <h3>Array</h3>
        {[1, 2, 3, 4]}
        <h3>Object</h3>
        {/* 會有中斷錯誤 */}
        {/* {{ a: 1, b: 2 }} */}
        <h3>Function</h3>
        {() => {
            console.log(123);
        }}

        <hr />

    </>);
}

export default JSX;