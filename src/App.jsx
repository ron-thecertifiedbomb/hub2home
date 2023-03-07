import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero title={'Contact Us'}/>

    </div>
  );
}

export default App;
