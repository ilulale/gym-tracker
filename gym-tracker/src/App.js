import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Plan from "./Plan";
import Schedule from "./Schedule";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/plan/:day" element={<Plan />} />
        <Route path="*" element={<div>404 Not Found.</div>} />
      </Routes>
    </Router>
  );
}

export default App;
