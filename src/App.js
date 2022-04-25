import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Components/Feed";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
