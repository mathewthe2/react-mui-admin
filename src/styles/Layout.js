import React, { Component } from 'react';
import './Layout.css';
import Sidebar from './Sidebar';

class Layout extends Component {
  constructor(props) {
  super(props);

  this.state = {
    openSideDrawer: false,
  }

  this.onChangeSideDrawer = () => this.setState({openSideDrawer: !this.state.openSideDrawer})

  }
  render() {
    const {openSideDrawer} = this.state;

    let toggleWidth = openSideDrawer ? 200 : 0;


    return (
      <div style={{   
        height: '100%',
        backgroundColor: '#eee'
        }}
        className="content"
        >
        { openSideDrawer &&
          <Sidebar /> 
        }
        <header id="header" style={{left : toggleWidth}} >
          <div style={{backgroundColor: 'rgb(119, 143, 156)'}} className="mui-appbar mui--appbar-line-height">
            <div className="mui-container-fluid">
              <a className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
              
              
              <a onClick={()=>this.onChangeSideDrawer()} className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a>
              
              
              
              <span className="mui--text-title mui--visible-xs-inline-block mui--visible-sm-inline-block">Brand.io</span>
            </div>
          </div>
        </header>
        <div id="content-wrapper" style={{marginLeft : toggleWidth}} >
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
        {/* <footer id="footer " style={{marginLeft : toggleWidth}}>
          <div className="mui-container-fluid">
            <br/>
            Some footer here
          </div>
        </footer> */}
      </div>
    );
  }
}

export default Layout;
