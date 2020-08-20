import React from 'react';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import 
{
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}>
          </Route>
          <Route exact path="/Profile" component={Profile}></Route>
          <Route exact path="/Projects" component={Projects}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
      </div>
    </Router>
  );
}

export default App;
