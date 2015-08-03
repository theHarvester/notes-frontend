/**
 *  Main app
 */
// Require React first because of weird loading issue with browserify
window.react = require('react');
var views = require('./views/routes.jsx');

(function () {
    'use strict';
    views();

    // Include basic jquery scripts
    require('./jq-components/side-menu-resizer');
})();