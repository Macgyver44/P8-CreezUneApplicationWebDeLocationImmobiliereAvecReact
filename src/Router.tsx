import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index.tsx";
import Error from "./Pages/Error/error.tsx";
import Propos from "./Pages/Propos/propos.tsx";
import Immo from "./Pages/Immo/immo.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/immo" element={<Immo />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
