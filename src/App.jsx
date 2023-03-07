import "./App.css";
import ContactPage from "./Pages/ContactPage";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
    
      <ContactPage />
    </div>
  );
};

export default App;
