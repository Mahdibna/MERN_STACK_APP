import { useEffect, useState } from "react";
import AdminRouter from "./AdminRouter";
import "./App.css";
import Ignored from "./Ignored";
import Navbar from "./Navbar";
import PrivateRoutes from "./PrivateRoutes";
import ADMIN from "./pages/ADMIN";
import AccessDenied from "./pages/AccessDenied";
import LOGIN from "./pages/LOGIN";
import NotFound from "./pages/NotFound";
import PROFILE from "./pages/PROFILE";
import REGISTER from "./pages/REGISTER";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { SET_USER } from "./Redux/types";
import store from "./Redux/store";
if (localStorage.getItem("jwt")) {
  const decoded = jwtDecode(localStorage.getItem("jwt"));
  store.dispatch({
    type: SET_USER,
    payload: decoded,
  });
}
function App() {
  const store = useSelector((store) => store);
  const [user, setuser] = useState({
    isConnected: store.auth.isConnected,
    role: "ADMIN",
  });
  useEffect(() => {
    setuser({ ...user, isConnected: store.auth.isConnected });
  }, [store]);

  return (
    <Router>
      <div className="bg-light" style={{ height: "100vh" }}>
        <Navbar user={user} />
        <Routes>
          <Route
            path="/register"
            element={
              <Ignored user={user}>
                <REGISTER />
              </Ignored>
            }
          />
          <Route
            path="/login"
            element={
              <Ignored user={user}>
                {" "}
                <LOGIN />{" "}
              </Ignored>
            }
          />
          <Route
            path="/Admin"
            element={
              <AdminRouter user={user}>
                {" "}
                <ADMIN />{" "}
              </AdminRouter>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoutes user={user}>
                <PROFILE />
              </PrivateRoutes>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/AccessDenied" element={<AccessDenied />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
