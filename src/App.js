import "./App.css";
import Article from "./components/common/Article";
import { Navbar, Footer, Profile } from "./components/common";
import {
  Home,
  ContactUs,
  Directory,
  Blog,
  Donor,
  TermsandPrivacy,
} from "./components/pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
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
            <Route exact path="/directory/:id">
              <Profile />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/blog/:id">
              <Article />
            </Route>
            <Route exact path="/donor">
              <Donor />
            </Route>
            <Route exact path="/termsandprivacy">
              <TermsandPrivacy />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
