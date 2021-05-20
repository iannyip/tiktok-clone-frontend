import './App.css';
import {TiktokProvider} from "./store.js";
import Video from "./components/Video.jsx";

function App() {
  return (
    <TiktokProvider>
      <div className="App">
        <Video/>
      </div>
    </TiktokProvider>
  );
}

export default App;
