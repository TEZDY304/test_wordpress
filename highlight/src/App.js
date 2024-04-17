import { HashRouter, Route, Routes } from "react-router-dom";

import Video from "./components/video";
import Highlight from "./components/hightlight";

function App() {
  return (
    <div className="">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Highlight />} />
          <Route path="/highlight" element={<Highlight />} />
          <Route path="/:slugUrl" element={<Video />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
