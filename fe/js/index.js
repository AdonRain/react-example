require('./ie8');

const React = require('react');
const {render} = require('react-dom');
const {Router} = require('react-router');
const {Provider} = require('react-redux');
const {routes, history} = require('./views').default;
const store = require('./store');

render(
  <Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>,
  document.getElementById('app')
);
