import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar2 from "./components/Navbar2/Navbar2";
import Newsfeed from "./pages/Newsfeed/Newsfeed";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Snippets from "./pages/Snippets/Snippets";

const App = () => (
  <Router>
    <div>
      <Navbar2 />
      <Route exact path="/" component={Newsfeed} />
      <Route exact path="/newsfeed" component={Newsfeed} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/snippets" component={Snippets} />
      <Route exact path="/profile/:id" component={Profile} />
    </div>
  </Router>
);

export default App;
