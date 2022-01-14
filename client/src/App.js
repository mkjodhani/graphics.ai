import { Route, BrowserRouter, Routes } from "react-router-dom";
import Certificate from "./components/pages/Certificate";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
