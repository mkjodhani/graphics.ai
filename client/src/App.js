import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import LogIn from "./components/pages/authentication/LogIn";
import SignIn from "./components/pages/authentication/SignIn";
import Certificate from "./components/pages/Certificate";
import Home from "./components/pages/Home";
import { store } from "./redux/store";
export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
function App() {
  const userInfo = useSelector((state) => state.user);
  return (
      <Routes>
        <Route  path="/" element={<Index />} />
        <Route path="/certified/*" element={<Home/>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
  );
}
