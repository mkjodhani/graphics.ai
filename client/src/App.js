import { Provider, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import { store } from "./redux/store";
import Editor from "./components/pages/Editor";
import Visulizer from "./components/pages/visulizer/Visulizer";
import VisulizerSix from "./components/pages/visulizer/VisulizerSix";
import VisulizerSeven from "./components/pages/visulizer/VisulizerSeven";
import VisulizerEight from "./components/pages/visulizer/VisulizerEight";
import VisulizerNine from "./components/pages/visulizer/VisulizerNine";
import VisulizerNineHalf from "./components/pages/visulizer/VisulizerNineHalf";
import VisulizerTen from "./components/pages/visulizer/VisulizerTen";
import VisulizerEleven from "./components/pages/visulizer/VisulizerEleven";
import Modeling from "./components/pages/modeling";

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
        <Route path="/editor" element={<Editor />} />
        <Route path="/visulizer" element={<Visulizer />} />
        <Route path="/visulizer/six" element={<VisulizerSix />} />
        <Route path="/visulizer/seven" element={<VisulizerSeven />} />
        <Route path="/visulizer/eight" element={<VisulizerEight />} />
        <Route path="/visulizer/nine" element={<VisulizerNine />} />
        <Route path="/visulizer/nine-1" element={<VisulizerNineHalf />} />
        <Route path="/visulizer/ten" element={<VisulizerTen />} />
        <Route path="/visulizer/eleven" element={<VisulizerEleven />} />
        <Route path="/modeling" element={<Modeling />} />
      </Routes>
  );
}
