import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';

import Addvehicle from './components/Addvehicle';
import Addtoll from './components/Addtoll';

function App() {
  return (

    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/addvehicle" element={<Addvehicle />} />
        <Route path="/addtoll" element={<Addtoll />} />
        <Route path="/viewtoll" element={<Addtoll />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
