import { Provider, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { store } from "./redux/store";
import Model from "./components/pages/modeling/components/Model";
import Layout from "./components/pages/modeling/components/Layout";
import LogIn from "./components/pages/authentication/LogIn";
import SignIn from "./components/pages/authentication/SignIn";
import HomePage from "./components/HomePage";
import Editor from './components/pages/editor/Editor'
import TransformBackground from "./components/pages/converter/TransformBackground";
import BlurBackground from "./components/pages/converter/BlurBackground";
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
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/modeling" element={<Model />} />
      <Route path="/image-blur" element={<BlurBackground />} />
      <Route path="/image-tranform" element={<TransformBackground />} />
      <Route path="/modeling/layout" element={<Layout />} />
    </Routes>
  );
}
