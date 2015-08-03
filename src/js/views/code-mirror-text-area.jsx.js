var React = require('react');
var CodeMirror = window.CodeMirror;

var CodeTextArea = React.createClass({
    componentDidMount: function() {
        var self = this;
        let cm = CodeMirror.fromTextArea(React.findDOMNode(this.refs.codeInput), this.props.options); cm.on('change',function(cm) {
            if(typeof self.props.onChange == 'function') {
                self.props.onChange(cm);
            }
        });
        cm.setSize("100%", "100%");
        if(this.props.value){
            cm.getDoc().setValue(this.props.value);
        }
    },

    getInitialState: function () {
        return {
            codeMirror: null
        }
    },

    render: function() {
        return (
            <div>
                <textarea ref="codeInput"/>
            </div>
        );
    }
});

module.exports = CodeTextArea;