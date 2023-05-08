import { Routes, Route } from "react-router-dom";

import Navbar from "./componets/navbar/navbar.comp";
import Home from "./routes/home/home.comp";
import AuthPage from "./routes/authpage/authpage.comp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
}

export default App;
