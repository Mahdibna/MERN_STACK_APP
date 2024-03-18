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
function App() {
  const user = {
    isConnected: true,
    role: "AD",
  };
  return (
    <Router>
      <div className="bg-light" style={{ height: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Ignored user={user}> <REGISTER/> </Ignored>}/>
          <Route path="/login" element={<Ignored user={user}> <LOGIN/> </Ignored>}/>
          <Route path="/Admin"element={ <AdminRouter user={user}>   <ADMIN /> </AdminRouter> }/>
          <Route path="/" element={<PrivateRoutes user={user}><PROFILE /></PrivateRoutes>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/AccessDenied" element={<AccessDenied />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
