import './App.css';
import {BrowserRouter} from "react-router-dom";
import About from "./Components/About/About"
function App() {
  return (
      <BrowserRouter>
        <About/>
      </BrowserRouter>
  );
}

export default App;
