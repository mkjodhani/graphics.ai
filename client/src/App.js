import { Route, BrowserRouter, Routes } from "react-router-dom";
import Certificate from "./components/pages/Certificate";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    // <BrowserRouter basename="/">
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/certificate" element={<Certificate />} />
    //     <Route path="/login" element={<LogIn />} />
    //     <Route path="/signin" element={<SignIn />} />
    //   </Routes>
    // </BrowserRouter>
    <Home/>
  );
}

export default App;
