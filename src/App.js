import "./App.css";
import { Navbar, Footer } from "./components/common";
import { Home, ContactUs } from "./components/pages";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Navbar />
        <Home />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
