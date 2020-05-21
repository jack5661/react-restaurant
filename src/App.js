import React from 'react';
import "./styles.css";

import NavBar from "./NavBar";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.curr = <Home />;
      this.seeContact = this.seeContact.bind(this);
      this.seeHome = this.seeHome.bind(this);
      this.seeMenu = this.seeMenu.bind(this);
    }

    render() {
      return (
        <div>
          <NavBar 
            tabMenu = {this.seeMenu} 
            tabHome = {this.seeHome}
            tabContact = {this.seeContact}
          />
          {this.curr}
        </div>
      );
    }

    seeMenu() {
      this.curr = <Menu/>;
      this.forceUpdate();
    }

    seeHome() {
      this.curr = <Home/>;
      this.forceUpdate();
    }

    seeContact() {
      this.curr = <Contact/>;
      this.forceUpdate();
    }

}

export default App;
