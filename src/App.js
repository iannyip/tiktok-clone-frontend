import './App.css';
import {TiktokProvider} from "./store.js";
import Home from "./components/Home.jsx";
import LoginPage from "./components/LoginPage.jsx"
import FooterNavbar from "./components/FooterNavbar.jsx";

function App() {
  return (
    <TiktokProvider>
      <div className="App">
        <div className="MobileView">
          <Home/>
          {/* <LoginPage/> */}
          <FooterNavbar />
        </div>
      </div>
    </TiktokProvider>
  );
}

export default App;
