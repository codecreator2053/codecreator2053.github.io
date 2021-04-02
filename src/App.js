import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Research from "./components/Research";
import NavBar from "./components/NavBar";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Research} path="/research" />
        <Route component={Project} path="/post/:slug" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
