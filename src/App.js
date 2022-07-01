import logo from "./logo.svg";
import "./App.css";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import Demo3 from "./components/Demo3";
import Demo4 from "./components/Demo4";
import TooManyMarkers from "./components/TooManyMarkers";

function App() {
  return (
    <>
      <div className="map-grid">
        <div>
          <TooManyMarkers />
        </div>
        <div>
          <Demo2 />
        </div>
        <div>
          <Demo3 />
        </div>
        <div>
          <Demo4 />
        </div>
      </div>
    </>
  );
}

export default App;
