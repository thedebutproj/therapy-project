import "./App.css";
import { Navbar, Footer } from "./components/common";
import { Home, ContactUs, Directory } from "./components/pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contactus">
              <ContactUs />
            </Route>
            <Route exact path="/directory">
              <Directory />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
