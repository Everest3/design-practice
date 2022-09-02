import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Bonsai from "./pages/Bonsai/Bonsai";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bonsai />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
