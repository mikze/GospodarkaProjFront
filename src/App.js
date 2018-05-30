import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  Home,
  BrowsePrivateDictionaries,
  BrowsePublicDictionaries,
  CreatePrivateDictionary,
  CreatePublicDictionary
} from './routes'

class App extends Component {

  componentDidMount() {
    localStorage.setItem("user_details", "test@gmail.com|Jan|Nowak")
  }

  render() {

    return (

      <Router>
        <div className="container">
          <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/browse_private">Private Dictionaries</Link></li>
            <li><Link to="/browse_public">Public Dictionaries</Link></li>
            <li><Link to="/create_private">Create Private</Link></li>
            <li><Link to="/create_public">Create Public</Link></li>
          </ul>
          <div className="container" style={{ padding: 20 }}>
            <Route exact path="/" component={Home} />
            <Route path="/browse_private" component={BrowsePrivateDictionaries} />
            <Route path="/browse_public" component={BrowsePublicDictionaries} />
            <Route path="/create_private" component={CreatePrivateDictionary} />
            <Route path="/create_public" component={CreatePublicDictionary} />
          </div>
        </div>
      </Router>
    );
  }
}

export { App };
