var React = require('react');

var style = {
    width:"2px",
    height: "100vh",
    backgroundColor: "#F2F2F2",
    cursor: "col-resize"
};

module.exports = React.createClass({
    render: function () {
        return (
            <div className='split-bar' style={style}/>
        );
    }
});