var React = require('react');
var SideBarItem = require('./side-bar-item.jsx');

var style = {
    display:"flex",
    flexDirection:"column",
    width:"200px"
};

module.exports = React.createClass({
    getInitialState(){
        return {
            data: this.props.data
        };
    },

    render: function () {
        return (
            <div className='side-bar' style={style}>
                <SideBarItem label="My Notes wooo"/>
                <SideBarItem label="Next note"/>
                <SideBarItem label="Yewooowwooo"/>
                <SideBarItem label="Foo bar"/>
            </div>
        );
    }
});