import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
// import Newsfeed from "./pages/Newsfeed/Newsfeed";
import Profile from "./pages/Profile/Profile";

const App = () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <Route exact path="/" />
      {/* <Route exact path="/newsfeed" component={Newsfeed} /> */}
      <Route exact path="/profile" component={Profile} />
    </div>
  </Router>
);

export default App;
