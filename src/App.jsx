import "./App.css";
import Login from "./components/Login/Login";
import Dashbord from "./components/Dashbord/Dashbord";
import ProtectedComp from "./components/ProtectedComp/ProtectdComp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComp>
              <Navigate to="/dashbord" replace />
            </ProtectedComp>
          }
        />
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashbord"
          element={
            <ProtectedComp>
              <Dashbord />
            </ProtectedComp>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
