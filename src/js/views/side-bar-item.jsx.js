var React = require('react');
var Please = require('pleasejs');

module.exports = React.createClass({
    getInitialState(){
        return {
            data: this.props.data
        };
    },

    render: function () {
        //style.backgroundColor()
        return (
            <div className='side-bar-item' style={this.getStyle()}>
                {this.props.label}
            </div>
        );
    },

    getStyle: function() {
        return {
            marginTop:"10px",
            marginLeft:"10px",
            padding:"10px",
            cursor:"pointer",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            backgroundColor: Please.make_color()
        };
    }
});