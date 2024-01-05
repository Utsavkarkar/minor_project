// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import Titen from "./Components/Titen";
import Rado from "./Components/Rado";
import Sylvi from "./Components/Sylvi";
import Aboutus from "./Components/Aboutus";
import Loginfrm from "./Components/Loginfrm";
import Regifrm from "./Components/Regifrm";
import ForgottenPass from "./Components/ForgottenPass";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/titen" element={<Titen />} />
          <Route path="/rado" element={<Rado />} />
          <Route path="/sylvi" element={<Sylvi />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/login" element={<Loginfrm />} />
          <Route path="/regifrm" element={<Regifrm />} />
          <Route path="/forgottenPass" element={<ForgottenPass />} />
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
