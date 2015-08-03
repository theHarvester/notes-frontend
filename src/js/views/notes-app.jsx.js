var React = require('react');
var SideBar = require('./side-bar.jsx');
var SplitBar = require('./split-bar.jsx');
var NoteContainer = require('./note-container.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
    componentDidMount: function () {
        var id = this.props.params.id;
        console.log(id);
    },

    render: function () {

        return(
            <div>
                <RouteHandler />
                <SideBar />
                <SplitBar />
                <NoteContainer />
            </div>
        );
    }
});