var React = require('react');

var style = {
    width:"100%",
    paddingTop:"10px",
    paddingBottom:"10px",
    border:"none",
    outline:"none"
};

module.exports = React.createClass({
    getInitialState(){
        return {
            title: "New title"
        };
    },

    render: function () {
        return (
            <input style={style} type="text" value={this.state.title} onChange={this.handleTitleChange} />
        );
    },

    handleTitleChange(event){
        //console.log(new_title);
        this.setState({title: event.target.value});
    }
});