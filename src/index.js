import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

const Navigation = () => {
    return (
      <div>
        <div className="App">
          <h1>React Router</h1>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
          <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    );
  };
  
  const App = () => (
    <div>
       <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Navigation />
      </div>
    </div>
  );
  
  

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
