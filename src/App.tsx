import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portifolio/Portifolio";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
