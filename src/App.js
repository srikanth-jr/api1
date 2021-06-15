import React from "react";

import './App.css';
import UserPagination from "./components/UserPagination";

 
class App extends React.Component {
   
  render() {
    return (
      <React.Fragment>
        <UserPagination/>
      </React.Fragment>
    );
  }
}
export default App;
