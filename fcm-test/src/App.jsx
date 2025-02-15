import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import FCMTest from "./components/FCMTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fcm-test" element={<FCMTest />} />
    </Routes>
  );
}

export default App;
