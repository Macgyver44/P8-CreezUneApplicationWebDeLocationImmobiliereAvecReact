import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";
import Notfound from "./Pages/notfound/notfound.tsx";
import Propos from "./Pages/propos/propos.tsx";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ProjectDetails from "./Pages/projectdetails/projectdetails.tsx";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
