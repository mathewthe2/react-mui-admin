import React, { Component } from 'react';
import './App.css';
// import Layout from './styles/Layout';

import {Layout, 
        Drawer, 
        Navigation, 
        Content, 
        Header,
        Dialog,
        DialogTitle,
        DialogContent,
        DialogActions,
        Button } from 'react-mdl';

class Demo extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleOpenDialog = this.handleOpenDialog.bind(this);
      this.handleCloseDialog = this.handleCloseDialog.bind(this);
      this.handleBodyClick = this.handleBodyClick.bind(this);
    }
  
    handleOpenDialog() {
      this.setState({
        openDialog: true
      });
    }
  
    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
    }
    
    
      handleClick (e) {
        e.stopPropagation();
      }
    
      handleBodyClick () {
        this.setState({openDialog: false})
        // do something
      }
  
    render() {
      return (
        <div >
          <Button colored onClick={this.handleOpenDialog} raised ripple>Show Modal</Button>
          <Dialog open={this.state.openDialog} onClick={this.handleBodyClick}>
              <div onClick={this.handleClick}>
            <DialogTitle >Allow this site to collect usage data to improve your experience?</DialogTitle>
            <DialogContent >
              <p>Allowing us to collect data will let us get you the information you want faster.</p>
            </DialogContent>
            <DialogActions fullWidth>
              <Button type='button'>Agree</Button>
              <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
            </DialogActions>
            </div>
          </Dialog>
        </div>
      );
    }
  }
  

const newLayout = (
  <div className="demo-big-content">
    <Layout>
        <Header title="MUI" scroll>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="MUI">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content>
        <Demo />
        </Content>
    </Layout>
  </div>
)

class App extends Component {
render() {

    return (
      <div>
      {newLayout}
      </div>
    );
  }
}

export default App;
