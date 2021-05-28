import './App.css';
import {TiktokProvider} from "./store.js";
import Home from "./components/Home.jsx";
import FooterNavbar from "./components/FooterNavbar.jsx";
import MePage from "./components/MePage.jsx";
import UploadPage from "./components/UploadPage.jsx"
import React, {useContext} from "react";
import {
  BrowserRouter as Router,
  Redirect,
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
              <Redirect exact from="/" to="/home" />
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/upload">
                <UploadPage/>
              </Route>
              <Route path="/me">
                <MePage/>
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
