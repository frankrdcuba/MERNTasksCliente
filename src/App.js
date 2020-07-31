import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Projects from "./components/projects/Projects";
import ProjectState from "./context/projects/ProjectState";
import TasksState from "./context/tasks/TasksState";

function App() {
  return (
    <ProjectState>
      <TasksState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </BrowserRouter>
      </TasksState>
    </ProjectState>
  );
}

export default App;
