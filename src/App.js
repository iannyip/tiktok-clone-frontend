import './App.css';
import {TiktokProvider} from "./store.js";

function App() {
  return (
    <TiktokProvider>
      <div className="App">
        Hello
      </div>
    </TiktokProvider>
  );
}

export default App;
