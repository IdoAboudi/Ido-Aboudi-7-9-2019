import React from "react";

import Router from "../../Router";
import Navigation from "../Navigation";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    );
  }
}
export default App;
