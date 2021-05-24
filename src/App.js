import './App.css';
import {TiktokProvider} from "./store.js";
import Home from "./components/Home.jsx";
import LoginPage from "./components/LoginPage.jsx"

function App() {
  return (
    <TiktokProvider>
      <div className="App">
        {/* <Home/> */}
        <LoginPage/>
      </div>
    </TiktokProvider>
  );
}

export default App;
