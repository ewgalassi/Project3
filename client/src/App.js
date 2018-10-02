import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Newsfeed from "./pages/Newsfeed/Newsfeed";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Snippets from "./pages/Snippets/Snippets";
import EditProfile from "./pages/Profile/EditProfile";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Newsfeed} />
      <Route exact path="/newsfeed" component={Newsfeed} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/snippets" component={Snippets} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/editProfile" component={EditProfile} />
    </div>
  </Router>
);

export default App;
