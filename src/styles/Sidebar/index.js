import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCategories: new Map(),
    }

    this.style = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      width: 200,
      overflow: 'auto',
      zIndex: 0,
      backgroundColor: '#fff',
      transform: 'translate(200px)',
      transition: 'transform 0.2s',
    }

    this.showSubCategories = (index) => {
      let temp = this.state.showCategories;
      if (temp.has(index)) {
        temp.set(index, !temp.get(index));
      } else {
        temp.set(index, true)
      }
      this.setState({showCategories : temp})
    }



  }


    render() {
      const {title, content} = this.props;

      return (
        <div  id="sidedrawer" className="mui--no-user-select">
          <div id="sidedrawer-brand" className="mui--appbar-line-height">
            <span className="mui--text-title" style={{color: 'rgba(0,0,0,.38)'}}>
              {title}
            </span>
          </div>
          <div className="mui-divider"></div>
          {content}

          <ul>
        <li>
          <strong onClick={()=>this.showSubCategories(1)}>Category 1</strong>
          {this.state.showCategories.get(1) && 
          <ul >
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
          }
        </li>
        <li>
          <strong>sth else</strong>
          </li>
      </ul>

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
