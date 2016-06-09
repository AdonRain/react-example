import React, {Component} from 'react';
import { Router, Route, Link, Redirect, IndexRoute, IndexLink} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import Dashboard from './Dashboard';
import About from './About';
import Inbox from './Inbox';
import Message from './Message';


class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><IndexLink to="/" activeClassName="active" activeStyle={{color: '#c00'}}>App</IndexLink></li>
          <li><Link to="/about" activeClassName="active" activeStyle={{color: '#c00'}}>About</Link></li>
          <li><Link to="/inbox" activeClassName="active" activeStyle={{color: '#c00'}}>Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
};


export default (
  <Router history={createHashHistory({queryKey: false})}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
        <Redirect from="messages/:id" to="/messages/:id" />
      </Route>
    </Route>
  </Router>
);
