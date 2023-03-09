import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SuccessfulPage from "./Pages/SuccessfulPage.jsx/SuccessfulPage";
import ContactPage from './Pages/ContactPage/ContactPage'

const App = () => {
  return (

    <div className="App">
      <NavBar />
      <ContactPage />
       {/* <SuccessfulPage /> */}
    </div>
  );
};

export default App;
