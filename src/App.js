import React, { Component } from 'react';
import Auth from './auth/Auth';
import SiteBar from './home/Navbar';
import Splash from './home/Splash';
import LocationPage from './workouts/LocationSearch'
import Header from './home/Header'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: '',
      isLogin: false,
    }

    this.setSessionState = this.setSessionState.bind(this);
    this.protectedViews = this.protectedViews.bind(this);
    this.logout = this.logout.bind(this);
  }

  setSessionState(token) {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token, isLogin: true });

  }

  componentWillMount() {
    const token = localStorage.getItem('token')

    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token, isLogin: true });

    }
  }

  logout(){
    this.setState({ sessionToken: '' , isLogin: false});
    localStorage.removeItem('token');

  }

  protectedViews() {

    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
        <Route path='/' exact={true}>
        <Splash sessionToken={this.state.sessionToken}/>
        </Route>
        <Route>
          <LocationPage sessionToken={this.state.sessionToken}/>
          </Route>
        </Switch>
        
      )
    } else {
      return (
        <Route path="/auth" exact={true} >
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }

  }

  render() {
    return (
      <div>
      <Header />
      <Router>
        <div>
          <SiteBar clickLogout={this.logout} isLogin={this.state.isLogin}/>
          {this.protectedViews()}
        </div>
      </Router>
      </div>

    );
  }
}

export default App;
