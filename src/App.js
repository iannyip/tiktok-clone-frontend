import './App.css';
import {TiktokProvider} from "./store.js";
import Home from "./components/Home.jsx";
import LoginPage from "./components/LoginPage.jsx"
import FooterNavbar from "./components/FooterNavbar.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <TiktokProvider>
      <div className="App">
        <Router>
          <div className="MobileView">
            <Switch>
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/me">
                <LoginPage/>
              </Route>
            </Switch>
            <FooterNavbar />
          </div>
        </Router>
      </div>
    </TiktokProvider>
  );
}

export default App;
