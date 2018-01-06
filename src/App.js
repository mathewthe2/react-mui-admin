import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{   
        height: '100%',
        backgroundColor: '#eee'
        }}>
        <div id="sidedrawer" className="mui--no-user-select">
          <div id="sidedrawer-brand" className="mui--appbar-line-height">
            <span className="mui--text-title">Admin</span>
          </div>
          <div className="mui-divider"></div>
          <ul>
            <li>
              <strong>Category 1</strong>
              <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
              </ul>
            </li>
            <li>
              <strong>Category 2</strong>
              <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
              </ul>
            </li>
            <li>
              <strong>Category 3</strong>
              <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <header id="header">
          <div style={{backgroundColor: 'rgb(119, 143, 156)'}} className="mui-appbar mui--appbar-line-height">
            <div className="mui-container-fluid">
              <a className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
              <a className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a>
              <span className="mui--text-title mui--visible-xs-inline-block mui--visible-sm-inline-block">Brand.io</span>
            </div>
          </div>
        </header>
        <div id="content-wrapper">
          <div  className="mui--appbar-height"></div>
          <div className="mui-container-fluid">
            <br/>
            <h1>Admin View</h1>
           <p>body</p>
           <p>body</p>
           <p>body</p>
           <p>body</p>
           <p>body</p>
           </div>
        </div>
        <footer id="footer">
          <div className="mui-container-fluid">
            <br/>
            Some footer here
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
