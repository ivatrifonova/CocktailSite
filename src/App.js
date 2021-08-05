import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { useState } from "react";

function App() {
  let [user, setUser] = useState(localStorage.getItem("user"));

  let loginCallback = () => {
    let existingUser = localStorage.getItem("user");
    setUser(existingUser);
  };

  let logoutCallback = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {user ? (
              <Home logout={logoutCallback} />
            ) : (
              <Login login={loginCallback} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
