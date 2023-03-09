import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SuccessfulPage from "./Pages/SuccessfulPage.jsx/SuccessfulPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/success" element={<SuccessfulPage />} />
      </Routes>
    </div>
  );
};

export default App;
