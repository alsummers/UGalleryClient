import React, { Component } from 'react'
import './home.css'

class Header extends Component {
    render(){
        return (
        <div className="Header">
        <div className="overlay">
        <header className="App-header">
          <h1 className="App-title">UGallery</h1>
        </header>
        </div>
        </div>
        )
    }
}

export default Header