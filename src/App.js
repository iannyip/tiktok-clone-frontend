import './App.css';
import {TiktokProvider} from "./store.js";
import Home from "./components/Home.jsx";

function App() {
  return (
    <TiktokProvider>
      <div className="App">

      </div>
    </TiktokProvider>
  );
}

export default App;
