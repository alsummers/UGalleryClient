import React, { Component } from 'react';
import Auth from './auth/Auth';
import SiteBar from './home/Navbar';
import Header from './home/Header'
import {
  BrowserRouter as Router,
  Route
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

        <Route path='/splash' exact={true}>
        <SiteBar sessionToken={this.state.sessionToken} clickLogout={this.logout} isLogin={this.state.isLogin}/>
        </Route>
        
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
          {/* <SiteBar clickLogout={this.logout} isLogin={this.state.isLogin}/> */}
          {this.protectedViews()}
        </div>
      </Router>
      </div>

    );
  }
}

export default App;
