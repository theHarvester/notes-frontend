var React = require('react/addons');
var injectTapEventPlugin = require('react-tap-event-plugin');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./notes-app.jsx');

module.exports = function () {
    window.React = React;
    injectTapEventPlugin();
    var routes = (
        <Route path="/" name="app" handler={App}>
            <Route path="*" component={App}/>
        </Route>
    );
    Router.run(routes, Router.HashLocation, (Root) => {
        React.render(<Root/>, document.getElementById('notes-app'));
    });
};