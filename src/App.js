import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Bonsai from './pages/bonsai/Bonsai';
import MultistepForm from './pages/multistep_form/MultistepForm';
import Countdown from './pages/countdown/Countdown';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultistepForm/>}/>
          <Route path="/bonsai" element={<Bonsai />}/>
          <Route path="/countdown" element={<Countdown />}/>
          <Route path="/mutlti-step-form" element={<MultistepForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
