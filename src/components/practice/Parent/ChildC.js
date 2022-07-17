import PropTypes from "prop-types";

function ChildC({ text, name }) {
    return (<>
        <h3>{text}</h3>
        <h3>{name}</h3>
    </>);
}
ChildC.prototype = {
    text: PropTypes.string.isRequired,
    name: PropTypes.number.isRequired
};
ChildC.defaultProps = {
    text: '沒給值',
    name: 0
};

export default ChildC;