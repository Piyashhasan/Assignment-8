import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import PostDetail from "./Components/PostDetail/PostDetail";

function App() {
  return (
    <div>
      <Menu></Menu>
      
      <Router>
        <Switch>

          <Route path = '/home'>
            <Home></Home>
          </Route>

          <Route path = '/post/:postDetailId'>
            <PostDetail></PostDetail>
          </Route>

          <Route exact path = '/'>
            <Home></Home>
          </Route>

          <Route exact path = '*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
