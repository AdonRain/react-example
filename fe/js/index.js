require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js/fn/object/assign');

const React = require('react');
const {render} = require('react-dom');
const {Router} = require('react-router');
const {Provider} = require('react-redux');
const {routes, history} = require('./routes').default;
const store = require('./store');

render(
  <Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>,
  document.getElementById('app')
);
