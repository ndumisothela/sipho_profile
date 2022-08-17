import "./App.css";
import { Route, Switch } from "react-router-dom";
import ContactMe from "./Components/ContactMe/ContactMe";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import NavBar from "./Components/NavBar/NavBar";
import ThingsIdo from "./Components/ThingsIdo/ThingsIdo";
import WorkHistory from "./Components/WorkHistory/WorkHistory";

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <main>
        <Switch>
          <Route path="/about-me">
            <LandingPage />
          </Route>
          <Route path="/things-i-do">
            <ThingsIdo />
          </Route>
          <Route path="/work-history">
            <WorkHistory />
          </Route>
          <Route path="/contact-me">
            <ContactMe />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
