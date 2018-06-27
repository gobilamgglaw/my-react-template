import React, { Component } from 'react';

import Toolbar from './componets/Toolbar/Toolbar';
import SideDrawer from './componets/SideDrawer/SideDrawer';
import Backdrop from './componets/Backdrop/Backdrop';

import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState)=>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  render() {
    
    let backdrop;
    
    if (this.state.sideDrawerOpen) {
      
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div className="App">
       <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
       <SideDrawer show={this.state.sideDrawerOpen}/>
       {backdrop}
       <main className="pagecontainer">
         <p>This is the page content</p>
       </main>
      </div>
    );
  }
}

export default App;
