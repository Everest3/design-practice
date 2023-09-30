import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Bonsai from "./pages/Bonsai/Bonsai";
import Countdown from "./pages/Countdown/Countdown";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countdown />}/>
          <Route path="/bonsai" element={<Bonsai />}/>
          <Route path="/countdown" element={<Countdown />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
