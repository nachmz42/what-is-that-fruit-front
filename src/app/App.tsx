import Front from "@pages/Front";
import UploadImage from "@pages/UploadImage/UploadImage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />}></Route>
        <Route path="/upload-image" element={<UploadImage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
