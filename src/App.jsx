import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer'
import Home from "./Pages/HomePage/Home";
import SuccessfulPage from "./Pages/SuccessfulPage.jsx/SuccessfulPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import "./App.css";

const App = () => {

  return (
    <div className="App">
      
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/success" element={<SuccessfulPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
