var React = require('react');
var NoteTitle = require('./note-title.jsx');
var NoteBody = require('./note-body.jsx');

var style = {
    display:"flex",
    flexDirection:"column"
};

module.exports = React.createClass({
    getInitialState(){
        return {
            data: this.props.data
        };
    },

    render: function () {
        return (
            <div className='note-container'>
                <NoteTitle/>
                <NoteBody/>
            </div>
        );
    }
});