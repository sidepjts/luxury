import React from 'react'
import Home from "./home";
import {Route, Switch} from "react-router-dom";
import About from "./about";
import Expertise from "./expertise";
import Contacts from "./contacts";
import Blog from "./blog";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/expertise" component={Expertise} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/blog" component={Blog} />
    </Switch>
);

export default Main;
