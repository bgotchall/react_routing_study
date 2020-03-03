import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Pictures from './components/pages/Pictures';
import Calendar from './components/pages/Calendar';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/pictures" component={Pictures} />
        <Route exact path="/calendar" component={Calendar} />
        <h1>Footer</h1>
      </div>
    </Router>
  );
}





export default App;
