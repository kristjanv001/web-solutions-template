import "./App.css";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";
import Pitch from "./components/Pitch";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects/:projectId">
          <NavBar />
          <ProjectDetails />
        </Route>
        <Route exact path="/contact">
          <NavBar />
          <main>
            <ContactForm />
          </main>
        </Route>
        <Route exact path="/why">
          <NavBar />
          <main>
            <Pitch />
          </main>
        </Route>
        <Route exact path="/projects">
          <NavBar />
          <main>
            <ProjectList />
          </main>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
