var React = require('react');
var CodeTextArea = require('./code-mirror-text-area.jsx');

var style = {

};

module.exports = React.createClass({
    getInitialState(){
        return {
            data: this.props.data
        };
    },

    render: function () {
        // TODO move this out of here
        var code_mirror_options = {
            lineNumbers: false,
            mode: "application/json",
            theme: "xq-light"
            //height: "100%"
            //viewportMargin:"infinity"
        };
        return (
            <CodeTextArea onChange={this.handleChange} value="Note body" options={code_mirror_options} />
        );
    },

    handleChange(event){

    }
});