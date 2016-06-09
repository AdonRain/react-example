require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js/fn/object/assign');

const React = require('react');
const {render} = require('react-dom');
const {Provider} = require('react-redux');
const Root = require('./page/Root').default;

render(Root, document.getElementById('app'));
