import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
      const {title, content} = this.props;
      
      return (
        <div id="sidedrawer" className="mui--no-user-select">
          <div id="sidedrawer-brand" className="mui--appbar-line-height">
            <span className="mui--text-title">{title}</span>
          </div>
          <div className="mui-divider"></div>
          {content}
          {/* <ul>
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
          </ul> */}
        </div>
      );
    }
  }
  
  export default Sidebar;
