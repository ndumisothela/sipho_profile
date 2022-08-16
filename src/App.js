import "./App.css";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import NavBar from "./Components/NavBar/NavBar";
import ThingsIdo from "./Components/ThingsIdo/ThingsIdo";
import WorkHistory from "./Components/WorkHistory/WorkHistory";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <LandingPage />
      <ThingsIdo />
      <WorkHistory />
    </div>
  );
}

export default App;
